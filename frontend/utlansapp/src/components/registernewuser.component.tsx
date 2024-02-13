import React from "react";
import {isValidName,isValidEmail,isValidPhone,isValidPassword} from "../utils/validation"
import axios from "axios";

const RegisternewuserComponent = () => {
const [fornavn, setFornavn] = React.useState('');
const [etternavn, setEtternavn] = React.useState('');
const [mail, setMail] = React.useState('');
const [tlf, setTlf] = React.useState(0);
const [kontaktlarer, setKontaktlarer] = React.useState('');
const [password, setPassword] = React.useState('');

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    if(!isValidName(fornavn)){
      console.log("Fornavnet er ikke riktig format!");
    }
    else if(!isValidName(etternavn)){
      console.log("etternavn er ikke riktig format!");
    }
    else if(!isValidEmail(mail)){
      console.log("Mailen er ikke riktig format!");
    }
    else if(!isValidPhone(tlf.toString())){
      console.log("tlfnr er ikke riktig format!");
    }
   else if(!isValidName(kontaktlarer)){
      console.log("kontaktlarer er ikke riktig format!");
    }
    else if(!isValidPassword(password)){
      console.log("Passord må ha minst et siffer, en stor og liten bokstav og ha minst 8 tegn");
    }
    else{
        axios.post('http://localhost:4000/register', {
        fornavn: fornavn,
        etternavn: etternavn,
        mail: mail,
        tlf: tlf,
        kontaktlarer: kontaktlarer,
        password: password
      })
      .then(data=>console.log('data sendt!', data))
      .catch(err=>console.log(err))
    }
  };

return (
    <form onSubmit={handleSubmit}>
      <label>
        Fornavn:
        <input type="text" value={fornavn} placeholder="Skriv inn ditt fornavn" onChange={(event) => setFornavn(event.target.value)} />
      </label><br />
      <label>
        Etternavn:
        <input type="text" value={etternavn} placeholder="Skriv inn ditt etternavn" onChange={(event) => setEtternavn(event.target.value)} />
      </label><br />
      <label>
        Skolemail:
        <input type="text" value={mail} placeholder="Skriv inn din osloskolemail" onChange={(event) => setMail(event.target.value)} />
      </label><br />
      <label>
        tlf:
        <input type="number" value={tlf} placeholder="Skriv inn ditt tlfnr" onChange={(event) => setTlf(parseInt(event.target.value))} />
      </label><br />
      <label>
        kontaktlærer:
        <input type="text" value={kontaktlarer} placeholder="Fullt navn på din kontaktlærer" onChange={(event) => setKontaktlarer(event.target.value)} />
      </label><br />
      <label>
        Password:
        <input type="password" value={password} placeholder="Ditt passord" onChange={(event) => setPassword(event.target.value)} />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}


export default RegisternewuserComponent;
