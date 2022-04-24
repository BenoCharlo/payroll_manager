# pull official base image
FROM node:17.9-alpine

# set working directory
WORKDIR /frontend

# add `/frontend/node_modules/.bin` to $PATH
ENV PATH /frontend/node_modules/.bin:$PATH

# install frontend dependencies
COPY ./package.json ./
RUN npm install -g typescript
RUN npm install -g ts-node
RUN npm install

# add frontend
COPY . ./

# start frontend
CMD ["npm", "start"]
