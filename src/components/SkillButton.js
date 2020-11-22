import { Jumbotron, Container, Image, Row, Col, ProgressBar } from 'react-bootstrap/';
import '../assets/css/Skills.css';
const SkillButton=(props)=>{
  const {name,skill,buttName}=props;
    return(
        <div style={{margin:'auto 12% '}}><h4>{name}</h4>
                        <div className="d-flex ">
                            <button className={`${buttName} butt rounded-circle mr-4`}></button>
                            <ProgressBar style={{ width: "140px" }} className="align-self-center" now={props.skill} label={`${skill}%`} />
                        </div>
                    </div>
    )
}
export default SkillButton;