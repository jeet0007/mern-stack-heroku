FROM node:14.15.5

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

ENV MONGO_USER=root
ENV MONGO_PASS=pass
ENV MONGO_DATABSE=Stone
ENV PORT=5000
ENV NODE_ENV='production'

EXPOSE 5000

CMD ["yarn" , "docker-build-webapp"]













