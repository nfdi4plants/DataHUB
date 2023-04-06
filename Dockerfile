ARG VERSION=latest
FROM gitlab/gitlab-ee:$VERSION

# re-set VERSION as its cleared after a FROM directive
ARG VERSION

# copy static files
COPY templates/arc.tar.gz /opt/gitlab/embedded/service/gitlab-rails/vendor/project_templates/
COPY assets/dataplant-arc.png assets/house-solid.svg /opt/gitlab/embedded/service/gitlab-rails/public/assets/

# copy and execute the patch scripts
COPY scripts/${VERSION} /scripts
RUN /scripts/patch.sh

