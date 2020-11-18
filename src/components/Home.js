import '../assets/css/Home.css'
import img from '../assets/images/homeBack.jpg'
import Introduction from './Introduction'

import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'
 const Home=()=>{
    return(
        <div className="home">
         <Image src={`${img}`} className="homeImage"/>
         <div className="intro">
         <div className="anim"><Introduction /></div>
         <div className="button">
         <Button variant="outline-warning" >Skills</Button>{' '}
         <Button variant="outline-warning">Projects</Button>{'  '}
         <Button variant="outline-warning">Contact</Button>
         </div>
         </div>
         
             
         
        </div>
    )
}
export default Home;