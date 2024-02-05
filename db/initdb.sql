CREATE DATABASE IF NOT EXISTS utlanITutstyr;
USE utlanITutstyr;

CREATE TABLE IF NOT EXISTS brukere(
  brukerid INT AUTO_INCREMENT,
  fornavn VARCHAR(255) NOT NULL,
  etternavn VARCHAR(255) NOT NULL,
  epost VARCHAR(255) NOT NULL,
  telefonnummer VARCHAR(255),
  klasse VARCHAR(150) NOT NULL,  
  kontaktlarer VARCHAR(255) NOT NULL,
  PRIMARY KEY(brukerid)
);

CREATE TABLE IF NOT EXISTS utstyr(
  utstyrsid INT AUTO_INCREMENT,
  typeutstyr VARCHAR(255) NOT NULL,
  modell VARCHAR(255),
  statusutstyr ENUM('tilgjengelig', 'utlånt', 'under vedlikehold') NOT NULL,
  kjopsdato DATE,
  sisteservice DATE,  
  anneninfo varchar(255),
  PRIMARY KEY(utstyrsid)
);

CREATE TABLE IF NOT EXISTS utlan(
  utlansid INT AUTO_INCREMENT,
  brukerid INT NOT NULL,
  utstyrsid INT NOT NULL,
  forventetreturdato DATE NOT NULL,
  faktiskreturdato DATE,
  CONSTRAINT fk_bruker_id FOREIGN KEY(brukerid)
  REFERENCES brukere(brukerid)
  ON UPDATE CASCADE,
  CONSTRAINT fk_utstyr_id FOREIGN KEY(utstyrsid)
  REFERENCES utstyr(utstyrsid)
  ON UPDATE CASCADE,
  PRIMARY KEY(utlansid)
);

CREATE TABLE IF NOT EXISTS admins (
  adminid INT AUTO_INCREMENT,
  fornavn VARCHAR(255) NOT NULL,
  etternavn VARCHAR(255) NOT NULL,
  epost VARCHAR(255) NOT NULL UNIQUE,
  telefonnummer VARCHAR(255),
  passord VARCHAR(255) NOT NULL,
  PRIMARY KEY(adminid)
);
