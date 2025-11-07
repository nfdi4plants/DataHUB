#  DataHUB Deployment Checklist

_This document provides a checklist and guide for establishing and maintaining a DataHUB instance. It is community-maintained, please propose improvements via pull requests._

---

## 📋 Contents

1. [Infrastructure Requirements](#1-infrastructure-requirements)  
2. [Creating the DataHUB Container](#2-creating-the-datahub-container)  
3. [SMTP Configuration for Email Notifications](#3-smtp-configuration-for-email-notifications)  
4. [DNS Requests and Access Restrictions](#4-dns-requests-and-access-restrictions)  
5. [Adding ARCitect as an Application](#5-adding-arcitect-as-an-application)  
6. [HTTPS Setup](#6-https-setup)  
7. [Runner Configuration](#7-runner-configuration)  
8. [S3 Storage Integration](#8-s3-storage-integration)  
9. [Limiting Storage Usage](#9-limiting-storage-usage)  
10. [Modifying the Login Page Appearance](#10-modifying-the-login-page-appearance)  
11. [Adding Badges to Projects](#11-adding-badges-to-projects)  
12. [Keycloak Configuration](#12-keycloak-configuration)  
13. [Updating the Instance](#13-updating-the-instance)

---

## 1. Infrastructure Requirements

### Overview
You’ll need the following resources:

- Virtual machine for the **DataHUB server**
- Virtual machine for the **Runner**
- **Functional email account** for notifications
- **DNS records** for test and production instances
- **SSL/TLS certificates** (your university may support Let’s Encrypt or HARICA)

### Minimum Specifications

| Instance Type | CPU | RAM | Storage | OS |
|----------------|------|------|----------|----|
| Test Instance | 2+ cores (64-bit) | 8 GB | 200 GB | Linux (v3.10 or higher) |
| Production Instance | — | — | — | See [GitLab reference architectures](https://docs.gitlab.com/administration/reference_architectures/) |
| Runner VM | 8 cores | 16 GB | 300 GB | Linux (v3.10 or higher) |

---

## 2. Creating the DataHUB Container

Follow the setup guide in the [DataHUB GitHub repository](https://github.com/nfdi4plants/DataHUB), where the README provides detailed instructions on how to build and deploy the container using Docker Compose.

---

## 3. SMTP Configuration for Email Notifications

To send welcome emails and notifications, a **functional email account** from your IT department is required.

### 3.1 Obtain a functional email
Request an email address from your IT center through your university’s identity management portal.

### 3.2 Configuration
SMTP settings can be configured either in the `docker-compose.yml` file or directly in the `gitlab.rb` file.  
Below is an example configuration defined in `gitlab.rb`:

```ruby
gitlab_rails['smtp_enable'] = true
gitlab_rails['smtp_address'] = "mail.your-uni-domain.de"
gitlab_rails['smtp_port'] = 465
gitlab_rails['smtp_user_name'] = "datahub"
gitlab_rails['smtp_password'] = "your-password"
gitlab_rails['smtp_domain'] = "your-uni-domain.de"
gitlab_rails['smtp_authentication'] = "login"
gitlab_rails['smtp_tls'] = true
gitlab_rails['smtp_openssl_verify_mode'] = 'peer'

gitlab_rails['gitlab_email_from'] = 'datahub@your-uni.de'
gitlab_rails['gitlab_email_reply_to'] = 'datahub@your-uni.de'
```

For localhost testing:
```ruby
letsencrypt['enable'] = false
```

---

## 4. DNS Requests and Access Restrictions

Request DNS names from your university IT center.

- Example:  
  - Test instance → `datahubdev.your-uni.de`  
  - Production instance → `datahub.your-uni.de`
- Limit access to internal subnets (ask your network team).
- Control user access via GitLab settings (admin approval, domain restrictions).

---

## 5. Adding ARCitect as an Application

### Step 1: Register ARCitect in DataHUB

1. Go to your profile → **Edit Profile → Applications**  
2. Click **New Application**
3. Fill in:
   - **Name:** ARCitect  
   - **Redirect URI:** `http://localhost:7890`  
   - **Trusted:** ✔️  
   - **Confidential:** ❌  
   - **Scopes:** `api, read_api, read_user, read_repository, write_repository, openid, profile, email`
4. Save → GitLab will generate a **Client ID** and **Secret**

### Step 2: Configure ARCitect

In ARCitect → **Services → Add Service**, fill in:
- Server (DataHUB URL)  
- Client ID  
- Client Secret

---

## 6. HTTPS Setup

If your university provides SSL certificates (e.g., via HARICA):

1. Create the directory `/etc/gitlab/ssl/`
2. Place the certificate and key:
   ```
   /etc/gitlab/ssl/datahubdev.yourdomain.de.crt
   /etc/gitlab/ssl/datahubdev.yourdomain.de.key
   ```
3. Update `gitlab.rb`:
   ```ruby
   external_url "https://datahubdev.yourdomain.de"
   nginx['ssl_certificate'] = "/etc/gitlab/ssl/datahubdev.yourdomain.de.crt"
   nginx['ssl_certificate_key'] = "/etc/gitlab/ssl/datahubdev.yourdomain.de.key"
   ```
4. Apply configuration:
   ```bash
   sudo docker exec -it <container_id> bash
   gitlab-ctl reconfigure
   exit
   sudo docker restart <container_id>
   ```

---

## 7. Runner Configuration

1. Prepare a dedicated VM (recommended: 8 cores, 16 GB RAM, 300 GB disk).  
2. Install Docker and GitLab Runner.  
3. Import the GitLab server’s public certificate:

   ```bash
   sudo cp /tmp/datahubdev.yourdomain.de.crt /usr/local/share/ca-certificates/
   sudo update-ca-certificates
   sudo gitlab-runner restart
   ```

4. Register the runner via **Admin → CI/CD → Runners → New instance runner**.  
   - Executor: `docker`
   - Default image: `alpine:latest`
   - Check `/etc/gitlab-runner/config.toml` for correctness.

---

## 8. S3 Storage Integration

### 8.1 Gather credentials from your storage provider
You will need:
- Endpoint (e.g., `https://s3-de-example.de`)
- Access Key / Secret Key
- Bucket name (e.g., `datahub`)

### 8.2 Set up MinIO client
If you’re using **MinIO**, here’s an example configuration:

```bash
mc alias set minio https://minio.yourdomain.de ACCESSKEY SECRETKEY
mc alias list
```

You can then upload or manage data:
```bash
mc cp file.txt minio/datahub/
mc ls minio/datahub
mc rm minio/datahub/file.txt
```

### 8.3 Configure GitLab for S3 artifacts
The full Docker Compose configuration is available on the [DataHUB GitHub page](https://github.com/nfdi4plants/DataHUB).

In `gitlab.rb`:
```ruby
gitlab_rails['artifacts_enabled'] = true
gitlab_rails['artifacts_object_store_enabled'] = true
gitlab_rails['artifacts_object_store_remote_directory'] = "datahub"
gitlab_rails['artifacts_object_store_connection'] = {
  'provider' => 'AWS',
  'aws_access_key_id' => 'ACCESS_KEY',
  'aws_secret_access_key' => 'SECRET_KEY',
  'region' => 'us-east-1',
  'host' => 's3-de-example.de',
  'endpoint' => 'https://s3-de-example.de',
  'path_style' => true
}
```

Then run:
```bash
gitlab-ctl reconfigure
```

### 8.4 Enable LFS
```ruby
gitlab_rails['lfs_enabled'] = true
gitlab_rails['lfs_object_store_enabled'] = true
gitlab_rails['lfs_object_store_remote_directory'] = "datahub"
gitlab_rails['lfs_object_store_connection'] = { ...same as above... }
```

---

## 9. Limiting Storage Usage

To prevent excessive disk consumption on your DataHUB instance, apply the following optimizations:
1. Limit Docker log size to 30 MB by creating `/etc/docker/daemon.json`:
```json
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "30m",
    "max-file": "3"
  }
}
Then reload the Docker service:
   ```bash
   sudo systemctl restart docker
   ```

2. Reduce Prometheus retention in `gitlab.rb` to 10 days.
Prometheus metrics can grow quickly and consume significant storage.
To limit this, reduce the retention period in /etc/gitlab/gitlab.rb:
```ruby
prometheus['flags'] = {
  'storage.tsdb.retention.time' => '10d'
}
 ```
Then reconfigure DataHUB to apply the change:
   ```bash
   sudo gitlab-ctl reconfigure
   sudo docker restart <container id>
   ```
---

## 10. Modifying the Login Page Appearance

In **Admin → Settings → Appearance**, you can customize:
- Page title
- Logo
- Welcome message

---

## 11. Adding Badges to Projects

File hooks are defined in  
[`misc/datahub-hooks.bash`](https://github.com/nfdi4plants/DataHUB/blob/main/misc/datahub-hooks.bash)

### Steps:
1. Create `/home/user/data/config/datahub-secrets.include` with:
   ```bash
   api_token="glpat-..."
   arc_registry_token=""
   arc_registry_endpoint=""
   CI_SERVER_URL="https://datahubdev.yourdomain.de"
   CI_API_V4_URL="${CI_SERVER_URL}/api/v4"
   HOOK_DEBUG=1
   ```
2. Update `docker-compose.yml`:
   ```yaml
   volumes:
     - ./data/config/datahub-secrets.include:/etc/gitlab/datahub-secrets.include
     - ./data/logs/datahub-logs:/var/log/datahub
   ```
3. Restart the container.  
   Badges will appear on the project page after the next push.

---

## 12. Keycloak Configuration

See the [README](https://github.com/nfdi4plants/DataHUB) for details on integrating DataHUB with the DataPLANT authentication platform.

---

## 13. Updating the Instance

1. **Back up** all important data.  
2. **Pull** the latest image:

   ```bash
   sudo docker compose up --pull always
   # or
   sudo docker pull ghcr.io/nfdi4plants/datahub:main
   ```

3. **Rebuild the container:**

   ```bash
   sudo docker compose up -d
   # or
   sudo docker build -t datahub .
   ```

>  **Note:** GitLab does not allow major version jumps (e.g., 14.x → 17.x). Always update incrementally.

---

_Contributors are welcome to suggest clarifications, new sections, or improvements._
