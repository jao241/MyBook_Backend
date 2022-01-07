FROM node:alpine
WORKDIR /
COPY package.json /
RUN npm install
COPY . /
EXPOSE 3004
CMD [ "yarn", "build" ]