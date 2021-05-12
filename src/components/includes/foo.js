import React, { Component } from 'react';

import logo from './../../assets/Group 1.png';

import { Button, Container,Card, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <Card className="bg-dark text-white rounded-0">
              
         
                    <Container className="py-3">
                    <Card.Title>Footer</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                    </Container>
             
                </Card>
            </>
         );
    }
}
 
export default App;