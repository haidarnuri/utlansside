import React from "react";
import { isValidEmail, isValidPassword } from "../utils/validation";


const LoginComponent = () => {

  const [mail, setMail] = React.useState('');
  const [password, setPassword] = React.useState('');

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!isValidEmail(mail)){
      console.log("Mailen er ikke riktig format!");
    }
    else if(!isValidPassword(password)){
      console.log("Passord må ha minst et siffer, en stor og liten bokstav og ha minst 8 tegn");
    }
    else{
      console.log('username:', mail);
      console.log('password:', password);
    }
    
  };

return (
    <form onSubmit={handleSubmit}>
      <label>
        Mail:
        <input type="text" value={mail} onChange={(event) => setMail(event.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <button type="submit">Login</button>
    </form>
    
  );

}


export default LoginComponent;
