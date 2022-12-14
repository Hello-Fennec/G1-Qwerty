
FROM node as build

WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn cache clean && yarn --update-checksums
COPY . ./
RUN yarn && yarn build

FROM nginx
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
