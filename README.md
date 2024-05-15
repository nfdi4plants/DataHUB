# DataHUB Test Deployment

In the future we plan to release a ready-to-use docker-compose.yml file but here are some first drafts of a basic setup using the DataHUB image.

Note that currently the data folder in the current directory will be used to mount volumes for different aspects of the configuration & the data. This will be changed to some external, configurable mount point in the future. As it is the state is saved within ./data to facilitate testing and upgrade, while keeping the application state.

For background information on the concept of the DataHUB see our [poster contribution to the 2023 CoRDI conference](https://doi.org/10.5281/zenodo.10021181), for the data publication workflow in conjunction with InvenioRDM see the IWSG conference paper.

## GitLab Community Edition (CE) and Enterprise Edition (EE)

We chose to use the Enterprise Edition of GitLab because it provides the most easy
upgrade path to a non free version of GitLab if desired, and is therefore encouraged.
It is important to note here, that the Enterprise Edition of GitLab is free and does not requiere a commercial subscription, and "in this case runs using the open source license" [[1]](https://handbook.gitlab.com/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/tiers/#history-of-ce-and-ee-distributions). The Community and Enterprise Edition of GitLab only refere to software distributuions, and using the one over the other does not indicate that one is paid or unpaid user of GitLab. More information can be found in [The GitLab Handbook](https://handbook.gitlab.com/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/tiers/).

## Minimal working Version

```
version: '3.9'

services:
  web:
    image: ghcr.io/nfdi4plants/datahub:main
    restart: always
    environment:
      GITLAB_OMNIBUS_CONFIG: |
        external_url 'https://<datahub_hostname>'
        letsencrypt['enable'] = true
        gitlab_rails['initial_root_password'] = '<root_password>'
    ports:
      - '0.0.0.0:443:443'              # HTTPS
      - '0.0.0.0:22:22'                # SSH
      - '0.0.0.0:80:80'                # HTTP (for letsencrypt)
    volumes:
      - ./data/config:/etc/gitlab      # For storing the GitLab configuration files. 
      - ./data/logs:/var/log/gitlab    # For storing logs. 
      - ./data/gitlab:/var/opt/gitlab  # For storing application data. 
    shm_size: '256m'
```

- **external_url**: Specifies the hostname, replace the spaceholder <datahub_hostname> with the actual hostname of the DataHUB instance. 
- **gitlab_rails['initial_root_password']**: Specifies the inital root password for the DataHUB instance. Replace <root_password> with an initial root password of the DataHUB instance.
- **volumes**: Specifies where the data of the DataHUB instance will be stored on the host machine. Follows the form <host_location>:<container_location>, the location inside the contaier can not be changed, the loation on the host machine can be selected at will.
- **ports** Specifies the port mapping from the host to the container. In the example above, the localhost's HTTPS port (0.0.0.0:443) gets mapped to the port 443 in the container.

## Object Store configuration
The following configuration will enable object storage for data which supports it.
This will be GitLab Job artifacts, LFS objects, Uploads, Merge request diffs, Packages (optional), Dependency Proxy (optional), Terraform state files and Pages content. If the object storage should not be used for all the aforementioned data (except the optional ones), object storage must be disabled specifically. For all the data for which the object storage is not disabled, a bucket must be specified.

The example bellow activates object storage only for LFS objects.
```
version: "3.9"
services:
  gitlab:
    image: ghcr.io/nfdi4plants/datahub:main
    environment:
      GITLAB_OMNIBUS_CONFIG: |
        external_url 'https://<datahub_hostname>'
        letsencrypt['enable'] = true
        gitlab_rails['initial_root_password'] = '<root_password>'

        # Consolidated object storage configuration
        gitlab_rails['object_store']['enabled'] = true
        #gitlab_rails['object_store']['proxy_download'] = true
        gitlab_rails['object_store']['connection'] = 
        {
          'provider' => 'AWS',
          'region' => 'fr-repl',
          'aws_access_key_id' => '<aws_access_key_id>',
          'aws_secret_access_key' => '<aws_secret_access_key>',
          'endpoint' => '<endpoint_url>',
          'enable_signature_v4_streaming' => false,
          'path_style' => true
        }

        # Specify the bucket for the LFS objects
        gitlab_rails['object_store']['objects']['lfs']['bucket'] = '<bucket_name>'

        # disable object storage for everything except LFS objects
        gitlab_rails['object_store']['objects']['artifacts']['enabled'] = false
        gitlab_rails['external_diffs_object_store_enabled'] = false
        gitlab_rails['uploads_object_store_enabled'] = false
        gitlab_rails['pages_object_store_enabled'] = false

        gitlab_rails['dependency_proxy_enabled'] = false       
        gitlab_rails['packages_enabled'] = false
        gitlab_rails['terraform_state_enabled'] = false

    ports:
      - '0.0.0.0:443:443'              # HTTPS
      - '0.0.0.0:42:22'                # SSH
      - '0.0.0.0:80:80'                # HTTP (for letsencrypt)
    volumes:
      - ./data/config:/etc/gitlab      # For storing the GitLab configuration files. 
      - ./data/logs:/var/log/gitlab    # For storing logs. 
      - ./data/gitlab:/var/opt/gitlab  # For storing application data. 
    shm_size: '256m'
```

## OpenID Connect configuration

The login configuration currently requires a nfdi4plants OIDC client id and secret to use the central DataPLANT login infrastructure. You can also login using the `root` account which credentials are to be specified in the `docker-compose.yml` file.

Initial steps to create your own DataPLANT-backed DataHUB include the following:

1. **Specification of the hostname**  
*(described below as <datahub_hostname>)*  
  
  * The hostname should be resolvable Internet-wide (?)

2. **Specification of the Sign-In Credentials**  
*(in the following described as <nfdi4plants oidc client id>)*

  * Request credentials from the <a href=&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#115;&#121;&#115;&#111;&#112;&#115;&#64;&#110;&#102;&#100;&#105;&#52;&#112;&#108;&#97;&#110;&#116;&#115;&#46;&#111;&#114;&#103;>DataHUB team</a>, indicating the used hostname. 

3. **Using docker-compose.yml**
  * Replace <datahub_hostname> with the used hostname
  * Replace <nfdi4plants oidc client id> with the credentials requested from the DataHUB team.

If you encounter any issues during the deployment process, please report them [here](https://github.com/nfdi4plants/DataHUB/issues).   
If you need personal support, please contact us directly via 
<a href=&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#115;&#121;&#115;&#111;&#112;&#115;&#64;&#110;&#102;&#100;&#105;&#52;&#112;&#108;&#97;&#110;&#116;&#115;&#46;&#111;&#114;&#103;>mail</a>

```
version: '3.9'

services:
  web:
    image: ghcr.io/nfdi4plants/datahub:main
    restart: always
    environment:
      GITLAB_OMNIBUS_CONFIG: |
        external_url 'https://<datahub_hostname>'
        letsencrypt['enable'] = true
        gitlab_rails['initial_root_password'] = '<root_password>'
        gitlab_rails['omniauth_enabled'] = true
        gitlab_rails['omniauth_allow_single_sign_on'] = ['openid_connect']
        gitlab_rails['omniauth_auto_link_user'] = ['openid_connect']
        gitlab_rails['omniauth_sync_email_from_provider'] = 'openid_connect'
        gitlab_rails['omniauth_sync_profile_from_provider'] = ['openid_connect']
        gitlab_rails['omniauth_block_auto_created_users'] = false
        gitlab_rails['omniauth_providers'] = [
          {
            'name' => 'openid_connect',
            'label' => 'dataplant-login',
            'args' => {
              'name' => 'openid_connect',
              'scope' => ['openid','profile','email'],
              'response_type' => 'code',
              'issuer' => 'https://auth.nfdi4plants.org/realms/dataplant',
              'discovery' => true,
              'client_auth_method' => 'query',
              'uid_field' => 'sub',
              'send_scope_to_token_endpoint' => 'true',
                'client_options' => {
                  'identifier' => '<nfdi4plants oidc client id>',
                  'secret' => '<nfdi4plants oidc client secret>',
                  'redirect_uri' => 'https://<datahub_hostname>/users/auth/openid_connect/callback',
                  'end_session_endpoint' => 'https://auth.nfdi4plants.org/realms/dataplant/protocol/openid-connect/logout'
                }
              }
          }
        ]       
    ports:
      - '0.0.0.0:443:443'              # HTTPS
      - '0.0.0.0:42:22'                # SSH
      - '0.0.0.0:80:80'                # HTTP (for letsencrypt)

    volumes:
      - ./data/config:/etc/gitlab
      - ./data/logs:/var/log/gitlab
      - ./data/gitlab:/var/opt/gitlab
    shm_size: '256m'
```

## Activation of the ARC validation

The ARC validation feature is implemented using GitLabs CI/CD functionality.
Therefore, to make use of this feature, it is necessary to setup and configure a GitLab 
runner. To do so, follow these instructions:

**Note:** In the following, we will assume that you are using a Ubuntu/Debian based server.
We will link to external information, where the installation process differs if you are using another distribution.

### Prerequisites:
- A seperate server  

### Docker installation
We only tested the Docker executor for the GitLab runner. If you want to try and make another executor work, you can find more information on executors [here](https://docs.gitlab.com/runner/executors/index.html). If you decide to use the docker executor, as recommended, you need to install docker on the server where your runner will be installed. This can be achieved by the following steps, which you can also find on the [docker website](https://docs.docker.com/engine/install/debian/):

1. Uninstall conflicting packages:
``` 
for pkg in docker.io docker-doc docker-compose podman-docker containerd runc; do sudo apt-get remove $pkg; done 
```
2. Set up apt repository:

```
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```
3. Install required packages
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

4. Verify installation
```
sudo docker run hello-world
```

If you are not on a debian based system, you can find installation instructions [here](https://docs.docker.com/engine/install/).

### Installing GitLab Runner
We are providing the steps for installing the GitLab runner, which we sourced from [here](https://docs.gitlab.com/runner/register/index.html). If you are using a distribution which is not debian based, or even one for which GitLab does not provide an repository, you can find further instructions [here](https://docs.gitlab.com/runner/install/index.html).

1. Add the official GitLab repository
```
curl -L "https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh" | sudo bash
```

2. Install the latest version of GitLab Runner
```
sudo apt-get install gitlab-runner
```

### Registering the GitLab runner
1. In you already set up  GitLab instance, set up your runner as a instance runner. 
    To do so, you need to open the admin area, select the "Instance Runners" entry in the "Features" menu. Alternatively visit ```https://<your-datahub-hostname>/admin/runners```.
2. Click on "New instance runner"
3. Under "Platform", select "Linux" as operating systems.
4. Under "Tags", check the checkbox for "Run untagged jobs"
5. Click on "Create runner"
6. Follow the steps which are shown to you. During these steps you need to choose an executor, as well as a default docker image if you choose the docker executor.
   - For the executor, choose "docker".
   - For the default image, choose a basic Linux image like debian or alpine from dockerhub.

## Set up the ARC validation process

### Prerequisites:
- A valid administrator access token with the scope "API". Make sure to always keep it valid.
- Enabled Auto DevOps, preferably instance wide. You can find out how to do this [here](https://docs.gitlab.com/ee/topics/autodevops/#at-the-instance-level).

### Configuration
For the validation process to work, there are some additional configuration options and files required. First, a configuration file containing the following information is requiered.

```
# Admin token for the GitLab API
api_token="<your_admin_token_here>"

# ARC registry (no need to specify)
arc_registry_token=""
arc_registry_endpoint=""

# DataHUB URL & API endpoint
CI_SERVER_URL="https://<your_gitlab_host>"
CI_API_V4_URL="${CI_SERVER_URL}/api/v4"

# Debugging: set to 1 to log hook execution in /var/log/datahub, 0 to disable.
HOOK_DEBUG=1
```

This configuration file is used to provide the acces token and the API endpoint to a script which is used to upload artifacts to GitLab repositories. It is also defines if debug logs should be keept. As this file needs to be accessible for the container, as well as a location to store the logs outside the container needs to be defined, the following addition need to be made to the docker compose file. In the following example, the configuration file mentioned is named "secrets.include". The directory containing the log files is named "datahub-logs"

```
    volumes:
      - <path_to_config_file>/secrets.include:/etc/gitlab/datahub-secrets.include
      - <path_to_store_log_files>/datahub-logs:/var/log/datahub
    shm_size: '256m'
```

### Process descriptions
There are different CI/CD pipelines available, all of which have different prerequisites and are triggered automatically.

#### Creation of arc.json
We start with the pipeline which is activated by default for all ARCs for which Auto DevOps is enabled. The purpose of this pipline is to create an arc.json file,
which will be stored in the package registry. This file is a machine digestible representation of the ISA file, which is used by numerous different DataPLANT tools.
This pipeline is triggered automatically when an ARC or repository is created, except when it is created from a template.
During execution of this pipeline, a new empty branch with the name "cqc" is created and a batch indicating that the pipline passed is shown in the
repository overview. This should always be the case since the pipeline is designed to never fail. 

#### Validation packages
It is possible to validate if your ARC fullfils the ARC specification and is fit for publication through different platforms.
You can choose for which platform the ARC should be validated for by selecting the corresponding "validation package".
As of now there is only one validation package for invenio, but there will be more options in the future.
These packages can be selected by placing the following file in your ARC.

```
validation_packages:
  - name: <package_name>
    version: 1.0.0          # optional
  - name: <package_name>
```
**Note:** The filepath for this file in your ARC has to be ".arc/validation_packages.yml"

When this file is present in your repository, the pipeline will be triggerd on each commit.
A job called "quality_report_generator" will be executed, which in turn will execute the trigger job "quality_report". This job will carry out one subprocess per specified validation package. For each of these validation processes, a validation report in form of an XML file as well as the badge image will is created. They are stored in the "cqc" branch in the directory \<branch\>/\<package\>@\<version\>. With \<branch\> being the branch in which the CI process was started. If there is no version specified in the "validation_packages.yml" file, then the "@\<version\>" part is omitted.

**Note:** The validation packages themselves are still a work in progress. Contact us if you need more information about which package would be available for testing.

