ARG VERSION=latest
FROM gitlab/gitlab-ee:$VERSION

ARG VERSION
COPY patches/${VERSION} /patches
RUN set -e; for p in /patches/*; do patch -p0 < $p; done

COPY templates/arc.tar.gz /opt/gitlab/embedded/service/gitlab-rails/vendor/project_templates/
COPY assets/dataplant-arc.png assets/house-solid.svg /opt/gitlab/embedded/service/gitlab-rails/public/assets/

#COPY pages.projects.new.5b691961.chunk.js.gz /opt/gitlab/embedded/service/gitlab-rails/public/assets/webpack/
#COPY pages.projects.new.5b691961.chunk.js.map.gz /opt/gitlab/embedded/service/gitlab-rails/public/assets/webpack/
