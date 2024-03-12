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
