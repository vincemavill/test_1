import React, { Component } from 'react';



import { Button, Container, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

import  Navigation  from './includes/nav';

import  Footer  from './includes/foo';

import {withRouter, Link } from "react-router-dom";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            foods:[]
        }
    }

    componentDidMount() {
       this.handleGetFood()
    }

        
    handleGetFood = () => {


        fetch('http://localhost:3001/recipes',{
            method: 'GET',
            headers: new Headers({
              'Content-Type': 'application/json'
            }),
        })
        .then(function(response) {return response.json()})
        .then(result => {

            console.log(result)
            this.setState({
                foods:result
            })
  
  
        })
        .catch(error => console.error(error));
  

          
    }

    render() { 
        return (
            <div>
                <Container>

                
                <Navigation/>

				
                <div className="row py-5">
				
 


                    {this.state.foods.map(function (data, index) {
      return (
        
        (data.title)
        ?
        <div className="col-lg-4">
             <Link to={"/view/"+data.uuid}>
            <figure class="snip1315" style={{
                backgroundImage: `url("`+"http://localhost:3001/"+data.images.full+`")` 
            }}>
              
                <figcaption>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                </figcaption><a href="#"></a>
            </figure>
            </Link>
        </div>
        :
        null



      );
    }, this)}



                </div>

					
           



                </Container>

                     <Footer/>
            </div>
        );
    }
}
 
export default App;