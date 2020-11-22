import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import React from 'react';
const ButtonGrp = () => {
    return (
        <React.Fragment>
            
  
            <Link to="/skills" ><Button variant="outline-warning" className="mr-3" >Skills</Button></Link>
            <Link to="/projects" ><Button variant="outline-warning" className="mr-3" >Projects</Button></Link>
            <Link to="/skills" ><Button variant="outline-warning" className="mr-3" >About</Button></Link>
            <Link to="/skills" ><Button variant="outline-warning" className="mr-3" >Contact</Button></Link>
          
        </React.Fragment>
    )
}

export default ButtonGrp;