import { Button } from 'react-bootstrap'
import { useHistory } from "react-router-dom";

function LinkedButton ({link, message, variant, size, className}){
    let history = useHistory();
  
    function handleClick() {
      history.push(link);
    }
  
    return (
      <Button className={className} variant={variant} size={size} onClick={handleClick}>
        {message}
      </Button>
    );
}

export default LinkedButton;