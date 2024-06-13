# Utlansside
App for utlån av utstyr. 

Applikasjonen vil nå kjøre på `http://localhost:3000` for frontend og `http://localhost:4000` for backend.

## Oppstartsinstruksjoner for databasen
Når Docker-komposisjonen kjører, vil MariaDB-databasen automatisk bli konfigurert og initialisert.

## Nødvendige installasjoner
- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node og NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Teknologier
Frontend: React (med TypeScript)  
Backend: Node.js, Express  
Database: MariaDB  
Container: Docker  

## Miljøvariabler
Opprett en `infodb.env`-fil i rotkatalogen og legg til følgende variabler:

MARIADB_ROOT_PASSWORD= 
MARIADB_USER=
MARIADB_PASSWORD=

Opprett en `backend.env`-fil i rotkatalogen og legg til følgende variabler:

DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=


## Bidragsregler
1. Fork prosjektet
2. Opprett en ny branch (`git checkout -b .... `)
3. Commit endringer (`git commit -m '...'`)
4. Push til branchen (`git push origin `)
5. Opprett en Pull Request

## Lisens
Dette prosjektet er lisensiert under MIT-lisensen - se [LICENSE](License) filen for detaljer.