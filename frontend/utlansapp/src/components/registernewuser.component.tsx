import React from "react";


const RegisternewuserComponent = () => {
const [fornavn, setFornavn] = React.useState('');
const [etternavn, setEtternavn] = React.useState('');
const [mail, setMail] = React.useState('');
const [tlf, setTlf] = React.useState(0);
const [kontaktlarer, setKontaktlarer] = React.useState('');
const [password, setPassword] = React.useState('');

const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault(); 

    const userData = {
      fornavn,
      etternavn,
      mail,
      tlf,
      kontaktlarer,
      password,
    };

    try {
        const response = await fetch('http://localhost:4000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        if (response.ok) {
          const result = await response.text();
          console.log(result); 
        } else {
          console.error('Failed to register user');
        }
      } catch (error) {
        console.error('Error message', error);
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
