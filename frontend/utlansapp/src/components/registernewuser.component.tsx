import React from "react";


const RegisternewuserComponent = () => {
const [fornavn, setFornavn] = React.useState('');
const [etternavn, setEtternavn] = React.useState('');
const [mail, setMail] = React.useState('');
const [tlf, setTlf] = React.useState('');
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
        <input type="text" value={fornavn} onChange={(event) => setFornavn(event.target.value)} />
      </label>
      <label>
        Etternavn:
        <input type="text" value={etternavn} onChange={(event) => setEtternavn(event.target.value)} />
      </label>
      <label>
        Skolemail:
        <input type="text" value={mail} onChange={(event) => setMail(event.target.value)} />
      </label>
      <label>
        tlf:
        <input type="text" value={tlf} onChange={(event) => setTlf(event.target.value)} />
      </label>
      <label>
        kontaktlærer:
        <input type="text" value={kontaktlarer} onChange={(event) => setKontaktlarer(event.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <button type="submit">Register</button>
    </form>
  );

}


export default RegisternewuserComponent;
