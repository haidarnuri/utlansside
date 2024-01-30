
import { useNavigate } from "react-router-dom";
import LoginComponent from "../components/login.component";


const MainLoginPage = () => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate('/Registernewuser');
      };
    
    return (

        <><LoginComponent />
       <button onClick={onClick}>
            Create new user
       </button>
        
        </>

    );
  }
  
  export { MainLoginPage };