FROM node:24-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5505
EXPOSE 3000

RUN npm run build

CMD ["npm", "run", "all"]