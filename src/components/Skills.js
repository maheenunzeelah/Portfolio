import { Jumbotron, Container, Image, Row, Col, ProgressBar } from 'react-bootstrap/';
import '../assets/css/Skills.css';
import ButtonGrp from './ButtonGrp';
import SkillButton from './SkillButton';
import img from '../assets/images/react.png';
import Navb from './Navbar';
{/* <button className="reactButt rounded-circle "></button> */ }
const Skills = () => {
    const reactjs = 90;
    const nodejs = 60;
    const mongodb= 60;
    const sql = 60;
    const c=60;
    const htm=80;
    const css=80;
    const js=90;
    return (
        <div >
           <Navb />
            <Container className="contain ">
                <h1 className="text-success m-5">SKILLS</h1>
                <div className="d-flex flex-wrap justify-content-md-start mb-4">
                    
                 <SkillButton name="React JS/Redux" skill={reactjs} buttName="reactButt"/>
                  
                 <SkillButton name="NodeJS" skill={nodejs} buttName="nodeButt"/>

                </div>
                <div className="d-flex flex-wrap justify-content-md-start mb-4">
                <SkillButton name="MongoDB" skill={mongodb} buttName="mongoButt"/>
                <SkillButton name="C# / .NET" skill={c} buttName="cButt"/>
                 

                </div>
                <div className="d-flex flex-wrap justify-content-md-start mb-4">
                <SkillButton name="HTML" skill={htm} buttName="htButt"/>
                <SkillButton name="CSS" skill={css} buttName="cssButt"/>
                </div>
                <div className="d-flex flex-wrap justify-content-md-start mb-5">
                   
                <SkillButton name="Javascript /ES6" skill={js} buttName="jsButt"/>
                <SkillButton name="SQL" skill={sql} buttName="sqlButt"/>
                </div>



            </Container>

        </div>
    )
}
export default Skills;