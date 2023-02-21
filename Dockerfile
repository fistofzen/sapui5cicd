FROM node
USER root
RUN npm install -global @ui5/cli @sap/ux-ui5-tooling @ui5/logger @ui5/fs
COPY --chown=node:node . .
USER root