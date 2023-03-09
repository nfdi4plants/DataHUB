# nfdi4plants DataHub

This is a development repository for the nfdi4plants DataHUB service.

# Test Deployment

In the future we plan to release a ready-to-use docker-compose.yml file but here is a first draft of a basic setup using the DataHUB image:

Note that currently the `data` folder in the current directory will be used to mount volumes for different aspects of the configuration & the data.
This will be changed to some external, configurable mount point in the future. As it is the state is saved within `./data` to facilitate testing and upgrade, while keeping the application state.

The login configuration currently requires a nfdi4plants OIDC client id and secret to use the central DataPLANT login infrastructure. You can also login using the `root` account which credentials are to be specified in the `docker-compose.yml` file.

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
								'secret' => '<nfdi4plants oidc client id>',
								'redirect_uri' => 'https://<datahub_hostname>/users/auth/openid_connect/callback',
								'end_session_endpoint' => 'https://auth.nfdi4plants.org/realms/dataplant/protocol/openid-connect/logout'
							}
						}
				}
			]				
	ports:
		- '0.0.0.0:443:443'
		- '0.0.0.0:22:22'
	volumes:
		- ./data/config:/etc/gitlab
		- ./data/logs:/var/log/gitlab
		- ./data/gitlab:/var/opt/gitlab
	shm_size: '256m'
```
