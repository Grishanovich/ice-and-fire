import React, { Component } from 'react';
import { Container } from 'reactstrap';
import RamService from '../../services/ramService'
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import AllChar from './allChar/allChar';


export default class App extends Component {

  render() {
    return (
      <>
        <Container>
          <Header />
        </Container>
        
        <Container>
          <RandomChar />
        </Container>

        <Container>
          <AllChar />
        </Container>
      </>
    )
  }
}

