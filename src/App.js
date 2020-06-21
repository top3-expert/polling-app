import React from 'react';
import './App.css'; import { Row, Col, Container, Button, Badge, Alert } from 'react-bootstrap';
import './Layout.css';
import { Amplify, API } from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

let apiName = 'pollCounterAPI';
let path = '/votes/';
let partitionKey = 'poll-001';

//import Layout from './Layout';

class App extends React.Component {

  componentDidMount() {
    API.get(apiName, path + partitionKey).then(response => {
      let votesYes = response[0].votesYes;
      let votesNo = response[0].votesNo;
      this.setState({
        votesYes: votesYes,
        votesNo: votesNo
      })
      console.log(response)
    });
  }

  state = {
    votesNo: '',
    votesYes: ''
  }
  handleVoteYes = () => {
    const init = {
      queryStringParameters: {
        vote: 'yes'
      }
    }
    API.post(apiName, path, init).then(response => {
      console.log(response);
    })
    console.log('in vote Yes');
  }

  handleVoteNo = () => {
    console.log('in vote No');
  }

  render() {

    return (
      <Container>
        <Row>
          <div id="container">
            <Alert key="1" variant="light">
              Voting App
          </Alert>
          </div>
        </Row>
        <Row>
          <Col>
            <Button variant="outline-success" onClick={this.handleVoteYes} >
              Vote Yes
              </Button>
            <hr />
            <h3> Total <Badge variant="light">{this.state.votesYes}</Badge> </h3>
          </Col>
          <Col>
            <Button variant="outline-danger" onClick={this.handleVoteNo}>
              Vote no
              </Button>
            <hr />
            <h3> Total <Badge variant="light">{this.state.votesNo}</Badge> </h3>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default App;