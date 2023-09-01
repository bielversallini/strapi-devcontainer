ARG VARIANT=-bullseye
FROM mcr.microsoft.com/devcontainers/javascript-node:0-18${VARIANT}

# install additional OS packages.
RUN apt-get update && apt-get install libvips-dev -y
