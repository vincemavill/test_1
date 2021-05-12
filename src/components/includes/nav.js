import React, { Component } from 'react';

import logo from './../../assets/Group 1.png';

import { Button, Container, Navbar, Nav, Form, FormControl,  } from 'react-bootstrap';


import {
    BrowserRouter,
    Switch,
    Route,
    Link as Links
  } from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <img src={logo} className="img-fluid my-5 mx-auto d-block" width="150" />
            <hr/>


            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav ml-auto d-block" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                    <Nav.Link  className="mx-3">
                    <Links to="/">
                        CMS
                    </Links>
                    </Nav.Link>
                    <Nav.Link  className="mx-3">
                    <Links to="/home">
                        HOME
                    </Links>
                    </Nav.Link>
                    <Nav.Link className="mx-3">
                    <Links to="/">
                        SAMPLE
                    </Links>
                    </Nav.Link>
                    <Nav.Link className="mx-3">
                    <Links to="/">
                        SAMPLE
                    </Links>
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
            </Navbar>
            </>
         );
    }
}
 
export default App;