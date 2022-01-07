FROM node:alpine
WORKDIR /
COPY package.json /
RUN npm install
COPY . /
EXPOSE 3001
CMD [ "yarn", "build" ]