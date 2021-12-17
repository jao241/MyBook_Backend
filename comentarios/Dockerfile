FROM node:alpine
WORKDIR /
COPY package.json /
RUN npm install
COPY . /
EXPOSE 3003
CMD [ "yarn", "dev" ]