import '../assets/css/Home.css';
import img from '../assets/images/homeBack.jpg';
import Introduction from './Introduction';
import ButtonGrp from './ButtonGrp';

import {Image} from 'react-bootstrap/';

 const Home=()=>{
    return(
        <div className="home">
         <Image src={`${img}`} className="homeImage"/>
         <div className="intro">
         <div className="anim"><Introduction />
         
         </div>
  
         </div>
         
             
         
        </div>
    )
}
export default Home;