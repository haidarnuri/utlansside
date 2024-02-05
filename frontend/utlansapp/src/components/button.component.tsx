import { useNavigate } from "react-router-dom";

interface ButtonComponentProps {
    label: string,
    path: string
}

const ButtonComponent = ({label,path}:ButtonComponentProps) => {
    
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(path);
    };
  
    return (
      <button onClick={handleClick} >
        {label}
      </button>
    );
  };

export {ButtonComponent};