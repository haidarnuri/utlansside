
import LoginComponent from "../components/login.component";
import { ButtonComponent } from "../components/button.component";



const MainLoginPage = () => {
    
    return (
        <>
        <LoginComponent />
        <ButtonComponent label="Create new user" path="/Registernewuser" />
        <ButtonComponent label="admin" path="/AdminLoginPage" />
        </>
    );
  }
  
  export { MainLoginPage };