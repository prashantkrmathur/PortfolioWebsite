import React from 'react'
import { Slide } from "react-awesome-reveal";
import skillsLight from '../media/skills-light.svg';
import skillsDark from '../media/skills-dark.svg';
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faBootstrap, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

const Skills = ({darkMode}) => {
    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Slide>
            <Container>
                <Row>
                <Col lg={4} xs={8}>
                    <h1 className="display-3 skill-h">I can work <p className="with">with</p> </h1>
                    <img  src={darkMode? skillsDark : skillsLight} alt="skills" className="skills-img img-fluid animated"/>
                </Col>
                <Col lg={2} xs={4}>
                    <br></br>
                    <Card className="nbcard">
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faHtml5}/>
                    </Button>
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faCss3Alt}/>
                    </Button>
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faJs}/>
                    </Button>
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faReact}/>
                    </Button>
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faBootstrap}/>
                    </Button>
                    </Card>
                </Col>
                <Col lg={6} xs={12}>
                    <br></br>
                    <Card className="skill-nbcard">
                        <Card.Body>
                            <Card.Title>Frontend</Card.Title>
                            <Card.Text>HTML, CSS, JavaScript, Bootstrap, ReactJs, Redux, MaterialUi, Nextjs </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="skill-nbcard">
                        <Card.Body >
                            <Card.Title>Backend</Card.Title>
                            <Card.Text>Nodejs, ExpressJs, Nestjs, Typescript, Python, Django, MongoDb, PostgreSQL, MySQL</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="skill-nbcard">
                        <Card.Body >
                            <Card.Title>Tools</Card.Title>
                            <Card.Text>Postman, Git, Visual Studio</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
                <br></br>
                <hr></hr>
            </Container>
            </Slide>
        </div>
    )
}

export default Skills
