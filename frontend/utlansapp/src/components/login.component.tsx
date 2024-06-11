import React from "react";
import { isValidEmail, isValidPassword } from "../utils/validation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [mail, setMail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessageMail, setErrorMessageMail] =
    React.useState("IkkeGodkjent");

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValidEmail(mail)) {
      console.log("Feil brukernavn. Bruk eposten din.");
    } else if (!isValidPassword(password)) {
      console.log("Feil passord");
    } else {
      console.log("vi er i else løkken");
      axios
        .post("http://localhost:4000/brukere/login", {
          epost: mail,
          passord: password,
        }, {
          withCredentials: true,
          headers: {
            'Access-Control-Allow-Origin': '*', 
            'Content-Type': 'application/json'
        }
        })
        .then((response) => {
          if(response.data.message==="Velkommen"){
            localStorage.setItem('token', response.data.token); // Lagrer token i localStorage
            navigate('/equipment-overview');
          }else{
            return ;
          }
        }) 
        .catch((err) => console.log(err));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Mail:
        <input
          type="text"
          value={mail}
          onChange={(event) => setMail(event.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit">Login</button>
      {errorMessageMail !== "godkjent!" && (
        <p style={{ color: "red" }}>
          {"skriv inn riktig brukernavn og passord"}
        </p>
      )}
    </form>
  );
};

export default LoginComponent;
