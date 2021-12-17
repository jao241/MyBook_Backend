FROM node:alpine
WORKDIR /
COPY package.json /
RUN npm install
COPY . /
EXPOSE 3006
CMD [ "yarn", "dev" ]