
import { useNavigate } from "react-router-dom";
import LoginComponent from "../components/login.component";


const MainLoginPage = () => {
    const navigate = useNavigate();
    const createNewUserButton = () => {
        navigate('/Registernewuser');
      };
      const adminPageButton = () => {
        navigate('/AdminLoginPage');
      };
      
    
    return (

        <><LoginComponent />
       <button onClick={createNewUserButton}>
            Create new user
       </button>
       <button onClick={adminPageButton}>
            Admin
       </button>
        
        </>

    );
  }
  
  export { MainLoginPage };