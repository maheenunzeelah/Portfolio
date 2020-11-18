import Button from 'react-bootstrap/Button';

import React from 'react';
const ButtonGrp = () => {
    return (
        <React.Fragment>
            <Button variant="outline-warning" className="mr-3">About Me</Button>
            <Button variant="outline-warning" className="mr-3" href="/skills" >Skills</Button>
            <Button variant="outline-warning" className="mr-3">Projects</Button>
            <Button variant="outline-warning" className="mr-3">Contact</Button>
        </React.Fragment>
    )
}

export default ButtonGrp;