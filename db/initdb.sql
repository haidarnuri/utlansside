CREATE DATABASE IF NOT EXISTS utlanITutstyr;
USE utlanITutstyr;

CREATE TABLE IF NOT EXISTS brukere(
  brukerid INT AUTO_INCREMENT,
  fornavn VARCHAR(255) NOT NULL,
  etternavn VARCHAR(255) NOT NULL,
  epost VARCHAR(255) NOT NULL,
  passord VARCHAR(255) NOT NULL,
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
  epost VARCHAR(255) NOT NULL,
  telefonnummer VARCHAR(255),
  passord VARCHAR(255) NOT NULL,
  PRIMARY KEY(adminid)
);


-- Insert testvalues in different tables
INSERT INTO brukere (fornavn, etternavn, epost, passord, telefonnummer, klasse, kontaktlarer) VALUES
('Test', 'Bruker1', 'testbruker1@osloskolen.no', 'passordtestbruker', '12345678', '10A', 'Kontaktlærer1'),
('Test', 'Bruker2', 'testbruker2@osloskolen.no','passordtestbruker', '', '10B', 'Kontaktlærer2');

INSERT INTO utstyr (typeutstyr, modell, statusutstyr, kjopsdato, sisteservice, anneninfo) VALUES
('PC', 'Dell XPS', 'tilgjengelig', '2020-01-15', '2021-01-15', 'Ingen'),
('Projektor', 'Epson X200', 'under vedlikehold', '2019-05-20', '2021-06-20', 'Lampen må byttes');

INSERT INTO utlan (brukerid, utstyrsid, forventetreturdato, faktiskreturdato) VALUES
(1, 1, '2023-02-10', NULL),
(2, 2, '2023-02-15', NULL);

INSERT INTO admins (fornavn, etternavn, epost, telefonnummer, passord) VALUES
('Admin', 'Adminsen', 'admin@osloskolen.no', '87654321', 'SikkertPassord123');