FROM node:alpine
WORKDIR /
COPY package.json /
RUN npm install
COPY . /
CMD [ "yarn", "dev" ]