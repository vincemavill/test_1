import React, { Component } from 'react';



import { Button, Container, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

import  Navigation  from './includes/nav';

import  Footer  from './includes/foo';



import {withRouter } from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uuid: this.props.match.params.id,
            foods: [],
            specials: [],
            view:[],
        };
    }

    componentDidMount() {

        this.handleGetFood()

        this.handleGetSpecial()
        
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

            // console.log(result)
            this.setState({
                foods:result
            },function(){
                this.handleGetSpecial()
            })
  
  
        })
        .catch(error => console.error(error));
  
          
    }

    handleGetSpecial = () => {


        fetch('http://localhost:3001/specials',{
            method: 'GET',
            headers: new Headers({
              'Content-Type': 'application/json'
            }),
        })
        .then(function(response) {return response.json()})
        .then(result => {

            // console.log(result)
            this.setState({
                specials:result
            },function(){
                this.handleGetView()
            })
  
  
        })
        .catch(error => console.error(error));
  
          
    }

    handleGetView = () => {

        var data = this.state.foods.reduce((list, curr) => {
            if(curr.uuid == this.state.uuid){
                console.log(curr)
                list = curr
               
            }

            return list;
          },[]);

        this.setState({
            view: data
        },function(){
            // console.log(this.state.specials)
        })

       




    }


    render() { 


        return (
            <div>
                <Container>

                
                <Navigation/>

       
                    <div className="row py-5">
                    
                        <div className="col-lg-6">
                            {
                                this.state.view.images
                                ?
                                    <img src={"http://localhost:3001/"+this.state.view.images.full}  className="img-fluid mx-auto d-block" />
                                :
                                null
                            }
                            
                        </div>
                        
                        <div className="col-lg-6">
                            <h2>{this.state.view.title}</h2>
                            <p>{this.state.view.description}</p>

                            <p>Servings: {this.state.view.servings}</p>
                            <p>Prep Time: {this.state.view.prepTime}</p>
                            <p>Cook Time: {this.state.view.cookTime}</p>
            

                            <h4>Ingredients:</h4>
                            <ul>
                            {
                                this.state.view.ingredients
                                ?

                            this.state.view.ingredients.map(function (data, index) {
                                return (
                          
                                <li className="py-2">
                                    
                                    <b className="text-capitalize">{data.name}</b> <small>{data.uuid}</small> <br></br>Measurements: {data.measurement} <br></br> Amount: {data.amount}
                                    <ul>
                                    {
                                        this.state.specials.map(function (dataSpecials, index) {
                                            return (
                                                dataSpecials.ingredientId == data.uuid
                                                ?
                                                    <li> <b>Specials:</b> <br></br>
                                                    {/* {dataSpecials.ingredientId} */}
                                                    Title:  {dataSpecials.title}<br></br>
                                                    Text:  {dataSpecials.text}<br></br>
                                                    Type:  {dataSpecials.type}
                                                    </li>
                                                :
                                                null
                                            );
                                        }, this)
                                    }
                                    </ul>
                                </li>
                                    
                                );
                                }, this)

                                :
                                null
                            }
                            </ul> 
                            
                        </div>
                    </div>
                
                
                	
                

		



                </Container>

                <Footer/>
            </div>
        );
    }
}
 
export default withRouter(App);