FROM node:alpine
WORKDIR /
COPY package.json /
RUN npm install
COPY . /
EXPOSE 3002
CMD [ "yarn", "dev" ]