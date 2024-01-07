# frontend/Dockerfile
FROM node:latest

# Setter arbeidskatalogen i containeren
WORKDIR /app

# Kopierer package.json og package-lock.json
COPY package*.json ./

# Installerer avhengighetene
RUN npm install

# Kopierer resten av appens kildekode
COPY . .

# Starter appen
CMD ["npm", "start"]