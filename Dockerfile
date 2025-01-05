FROM node:lts-alpine
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install
COPY . .
RUN chown -R node /usr/src/app
USER node
CMD ["yarn", "start:prod"]
