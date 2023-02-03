FROM gitlab/gitlab-ee:latest

COPY --from=ubuntu /etc/os-release /
COPY _head.html.haml /opt/gitlab/embedded/service/gitlab-rails/app/views/explore/
COPY _default.html.haml /opt/gitlab/embedded/service/gitlab-rails/app/views/layouts/header/
COPY project_template.rb /opt/gitlab/embedded/service/gitlab-rails/lib/gitlab/
COPY pages.projects.new.5b691961.chunk.js.gz /opt/gitlab/embedded/service/gitlab-rails/public/assets/webpack/
COPY arc.tar.gz /opt/gitlab/embedded/service/gitlab-rails/vendor/project_templates/
COPY house-solid.svg /opt/gitlab/embedded/service/gitlab-rails/public/uploads/-/system/appearance/header_logo/
