import {Navbar,FormControl,Button,Form,Nav} from 'react-bootstrap/';
import ButtonGrp from './ButtonGrp';
import {Link} from 'react-router-dom';
const Navb=()=>{
    return(
        <div>
  
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Link to="/"><Button variant="outline-warning" className="mr-3" >Home</Button></Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
   <ButtonGrp />
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
    )
}
export default Navb;