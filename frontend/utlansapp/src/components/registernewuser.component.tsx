import React from "react";


const RegisternewuserComponent = () => {

const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

  };

return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <button type="submit">Login</button>
    </form>
  );

}


export default RegisternewuserComponent;
