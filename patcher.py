import requests
# import HamlPy3

url = "https://gitlab.com/gitlab-org/gitlab/-/raw/1d12f8a75d7a4214376a55cc650874105af587a6/app/views/explore/_head.html.haml?inline=false"
request = requests.get(url, allow_redirects=True)


open('_head.html.haml', 'wb').write(request.content)


url="https://gitlab.com/gitlab-org/gitlab/-/raw/master/app/views/layouts/header/_default.html.haml?inline=false"
request = requests.get(url, allow_redirects=True)
open('_default.html.haml', 'wb').write(request.content)


url="https://gitlab.com/gitlab-org/gitlab/-/raw/master/lib/gitlab/project_template.rb?inline=false"
request = requests.get(url, allow_redirects=True)
open('project_template.rb', 'wb').write(request.content)

url="https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/lfs_token.rb"
request = requests.get(url, allow_redirects=True)
open('lfs_token.rb', 'wb').write(request.content)