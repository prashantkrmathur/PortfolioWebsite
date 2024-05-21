
import { Zoom, Fade } from 'react-awesome-reveal'

import ca from '../media/CA.png'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'
import masaiLms from "../media/masai_lms.png"
import pepperfry from "../media/pepperfry.png"
const Experience = ({ darkMode }) => {

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Fade>
                <Container>
                    <br></br>
                    <h2 className="lead" align="center"><b>My recent works</b></h2>
                    <br></br>
                    <h3 className="lead" align="center">Here are a few projects I've worked on recently.</h3>
                    <br></br>
                    <Zoom>
                        <Row>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br></br>
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={pepperfry} />
                                                    <Card.Body>
                                                        <Card.Title align="center">Clone of pepperfry.com</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">Pepperfry is an online marketplace for furniture. The company is headquartered in Mumbai.</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p> Users can add items to the cart and make payment through many merchants like Paytm, Google etc.
                                                        <br></br> Users can filter the item on the price, discount, brand, etc
                                                        <br></br>Tech Stack - HTML, CSS, JavaScript, ExpressJs, MongoDb and Nodejs.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br></br>
                                    <div>
                                        <a href="https://pepperfry-ochre.vercel.app/" target="_blank" rel="noreferrer noopener">
                                            <Button className='a' variant={darkMode ? "outline-light" : "outline-dark"}>View Project</Button>
                                        </a>
                                        <a href="https://github.com/nimbalkartejash/pepperfry" target="_blank" rel="noreferrer noopener">
                                            <Button className='a' variant={darkMode ? "outline-light" : "outline-dark"} >View Github Repo</Button>
                                        </a>
                                    </div>
                                    <br></br>
                                </Card>
                            </Col>
                           
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br></br>
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={ca} />
                                                    <Card.Body>
                                                        <Card.Title align="center">Clone of the abhibus.com</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">abhibus.com facilitates online booking of bus and train tickets to travellers all over India.</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p> Users can book bus, train, Hotel and make payment through many merchants like Paytm, Google etc.
                                                        <br></br> Users can filter as per their convenince etc
                                                        <br></br>Tech Stack - HTML, CSS, JavaScript, ExpressJs, MongoDb, Nodejs, ReactJs and Redux.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br></br>
                                    <div>
                                        <a href="https://abhi-bus-clone.vercel.app/" target="_blank" rel="noreferrer noopener">
                                            <Button className='a' variant={darkMode ? "outline-light" : "outline-dark"}>View Project</Button>
                                        </a>
                                        <a href="https://github.com/kerrybli/abhibus-clone" target="_blank" rel="noreferrer noopener">
                                            <Button className='a' variant={darkMode ? "outline-light" : "outline-dark"} >View Github Repo</Button>
                                        </a>
                                    </div>
                                    <br></br>

                                </Card>
                            </Col> <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br></br>
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={masaiLms} />
                                                    <Card.Body>
                                                        <Card.Title align="center">Masai LMS</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">Masai dashboard where user can access the lectures, assignment and quizzes.</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p>User can login, logout, user can see their profile, dashboard, lectures, assignments after successful authentication.
                                                        <br></br> Users can filter as per their convenince etc
                                                        <br></br>Tech Stack - HTML, CSS, JavaScript, ExpressJs, MongoDb, Nodejs, ReactJs and Redux.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br></br>
                                    <div>
                                        <a href="https://masai-lms-dashboard.vercel.app/" target="_blank" rel="noreferrer noopener">
                                            <Button className='a' variant={darkMode ? "outline-light" : "outline-dark"}>View Project</Button>
                                        </a>
                                        <a href="https://github.com/prashantkrmathur/Masai-LMS-dashboard" target="_blank" rel="noreferrer noopener">
                                            <Button className='a' variant={darkMode ? "outline-light" : "outline-dark"} >View Github Repo</Button>
                                        </a>
                                    </div>
                                    <br></br>
                                </Card>
                            </Col>



                        </Row>
                    </Zoom>
                    <br></br>
                </Container>
            </Fade>
            <br></br>
            <hr></hr>
            <br></br>
        </div>
    )
}

export default Experience
