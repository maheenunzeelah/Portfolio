import Navb from './Navbar';
import { Link } from 'react-router-dom';
import { Image, Button, Card, CardDeck } from 'react-bootstrap/';
import img from '../assets/images/cowasjee.PNG';
import  '../assets/css/Project.css';
const Project = () => {
    return (
        <div>
            <Navb />
            <div  className="container mt-5">
            <CardDeck>
                <Card >
                    <Card.Img variant="top" src={`${img}`} style={{}} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
        content.{' '}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
             </Card>
            
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
        content.{' '}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
             </Card>
            </CardDeck>
            </div>
        </div >
    )
}

export default Project;