

FROM node:latest

# Setter arbeidskatalogen i containeren
WORKDIR /app

COPY package*.json ./

RUN npm install

# Kopierer kildekoden til appen inn i containeren
COPY . .

# Kjører appen
CMD ["npm", "start"]