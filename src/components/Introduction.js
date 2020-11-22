import  {Container, Button} from 'react-bootstrap/';
import {Link} from 'react-router-dom';
import '../assets/css/Skills.css';
const Introduction=()=>{
    return(
       
           <Container>
    <h1 style={{fontSize:"45px" ,marginBottom:'20px'}}>MAHEEN UNZEELAH</h1>
    <div style={{width:'370px' ,textAlign:'justify',fontSize:'20px'}}>
    <p>
    I am a Software Engineer graduated from NED Uiversity
    and interested in pursuing my career as a web developer.
    My expertise is in MERN development and also I have understanding
    of C#
    <Button className="discover btn btn-success"><Link to="/skills">Discover Me</Link></Button>
    </p>
    </div>
  </Container>
      
    )
}
export default Introduction;