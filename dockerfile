FROM node:19


WORKDIR /app

COPY . /app/
RUN npm i
RUN npm run build
# RUN npm run test    

CMD npm start
