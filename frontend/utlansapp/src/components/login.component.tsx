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
    console.log("Vi er i handleSubmit");
    event.preventDefault();
    if (!isValidEmail(mail)) {
      console.log("Mailen er ikke riktig format!");
    } else if (!isValidPassword(password)) {
      console.log(
        "Passord må ha minst et siffer, en stor og liten bokstav og ha minst 8 tegn"
      );
    } else {
      console.log("vi er i else løkken");
      axios
        .post("http://localhost:4000/brukere/login", {
          epost: mail,
          passord: password,
        })
        .then((response) => console.log(response)) //Koden leser ikke denne linja
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
