import React from 'react';
import { Row, Col, Container, Button, Badge } from 'react-bootstrap';
import './Layout.css';

const Layout = () => {
    return (
        <Container>
            <Row>
                <div id="container">
                    <h1>Voting App</h1>
                </div>
            </Row>
            <Row>
                <Col>
                    <Button variant="outline-success">
                        Vote Yes
                    </Button>
                    <hr />
                    <h3> Total <Badge variant="light">9</Badge> </h3>
                </Col>
                <Col>
                    <Button variant="outline-danger">
                        Vote no
                    </Button>
                    <hr />
                    <h3> Total <Badge variant="light">9</Badge> </h3>
                </Col>
            </Row>
        </Container>
    );
}

export default Layout;



