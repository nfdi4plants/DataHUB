ARG VERSION=latest
FROM gitlab/gitlab-ee:$VERSION

# re-set VERSION as its cleared after a FROM directive
ARG VERSION

# copy static files
COPY templates/arc.tar.gz /opt/gitlab/embedded/service/gitlab-rails/vendor/project_templates/
COPY assets/dataplant-arc.png assets/house-solid.svg /opt/gitlab/embedded/service/gitlab-rails/public/assets/
COPY misc/datahub-hooks.bash /opt/gitlab/embedded/service/gitlab-rails/file_hooks/
COPY misc/Auto-DevOps.gitlab-ci.yml /opt/gitlab/embedded/service/gitlab-rails/lib/gitlab/ci/templates/

# copy and execute the patch scripts
COPY scripts/${VERSION} /scripts
RUN /scripts/patch.sh

# Copy custom entrypoin script
COPY scripts/${VERSION}/custom_startup.template /custom-entrypoint.sh
RUN chmod +x /custom-entrypoint.sh

## Copy API config script
#COPY scripts/${VERSION}/gitlab-postconfig /gitlab-postconfig

# Copy DataPLANT logos
COPY assets/* /assets_datahub/
RUN chmod -R 777 /assets_datahub

# create the datahub log folder
RUN mkdir -p /var/log/datahub
RUN chown git /var/log/datahub

# install jq
RUN apt-get update -y
RUN apt-get install jq -y

# Set the custom script as the entrypoint
ENTRYPOINT ["/custom-entrypoint.sh"]
