import React from 'react'
import { AttentionSeeker } from 'react-awesome-reveal';
import Img from "../media/about.png"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';

const Home = ({darkMode}) => {
    return (
        <div>
            <AttentionSeeker shakeX>
            <Row>
                    <Col lg={12} xs={12}>
                <h1 className="display-3 hello" align="center">Hi There!<code> I'm Prashant Kumar</code></h1>
                <h2 className="lead" align="center">I
                    <span
                        class="txt-rotate"
                        data-period="2000"
                        data-rotate='[ " am a Full-Stack Developer.", " love coding .", " am a learner for life!" ]'>
                    </span>
                </h2>
                </Col>
                </Row>
                <Row>
                    <Container align="center">
                    <Col lg={12} xs={12}>
                  <img src={Img} alt="hello" className="hello-img"/>
                </Col>
                </Container>
                </Row>
            </AttentionSeeker>
            <br></br>
            <hr></hr>
        </div>
    )
}

export default Home
