import { Jumbotron, Container, Image, Row, Col, ProgressBar } from 'react-bootstrap/';
import '../assets/css/Skills.css';
import ButtonGrp from './ButtonGrp';
import img from '../assets/images/react.png';
const Skills = () => {
    const reactjs = 90;
    const nodejs=60
    return (
        <div >
            <div className="buttons">
                <ButtonGrp />
            </div>
            <Container className="contain">


                <h1 className="text-white mb-5">SKILLS</h1>
                
                <Row className="mb-3">
                <Col sm={5}>
                   <h5 className="text-warning">React js/ Redux</h5>
                </Col>
                <Col >
                <h5 className="text-warning">Node js</h5>
                </Col>
                   

                </Row>
                <Row className="mb-3">
                   
                    <Col xs={1} sm={1}>  <button className="reactButt rounded-circle "></button>
                    </Col>
                    <Col md={3} sm={3} xs={3} className="dis">
                        <ProgressBar now={reactjs} label={`${reactjs}%`} />
                    </Col>
                    
                    <Col xs={1} sm={1}>  <button className="nodeButt rounded-circle "></button>
                    </Col>
                    <Col md={3} sm={3} xs={3} className="dis">
                        <ProgressBar now={nodejs} label={`${nodejs}%`} />
                    </Col>
                </Row>
                
                


            </Container>

        </div>
    )
}
export default Skills;