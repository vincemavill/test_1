import React, { Component } from 'react';



import { Button, Container,Table , Navbar, Nav, Form, FormControl, Modal } from 'react-bootstrap';

import  Navigation  from './includes/nav';

import  Footer  from './includes/foo';

import {withRouter, Link } from "react-router-dom";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            foods:[],
            updateModal: false,
            saveModal: false,

            edit:[]
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

                <Button variant="primary" className="float-right my-5" onClick={()=>{
                    this.setState({
                        saveModal:true
                    })
                }}>Add New</Button>



    <Modal show={this.state.updateModal} >
        <Modal.Header >
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>


<Form>





{
                    (this.state.edit.images) 
                    ?
                    <img src={"http://localhost:3001/"+this.state.edit.images.full}  className="img-fluid mx-auto d-block" width="300" />

                    :
                    null
                }
        <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Upload Image" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="" value={this.state.edit.title} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={3}  value={this.state.edit.description} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Servings</Form.Label>
    <Form.Control type="text" placeholder="" value={this.state.edit.servings} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Prep Time</Form.Label>
    <Form.Control type="text" placeholder="" value={this.state.edit.prepTime} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Cooktime</Form.Label>
    <Form.Control type="text" placeholder="" value={this.state.edit.cookTime} />
  </Form.Group>
</Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{
              this.setState({
                updateModal:false
              })
          }}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
              this.setState({
                updateModal:false
              })
          }}>
            Save
          </Button>
        </Modal.Footer>
    </Modal>















    <Modal show={this.state.saveModal} >
        <Modal.Header >
          <Modal.Title>Add New</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>

            

        <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Uplaod Image" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Servings</Form.Label>
    <Form.Control type="text" placeholder="" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Prep Time</Form.Label>
    <Form.Control type="text" placeholder="" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Cooktime</Form.Label>
    <Form.Control type="text" placeholder="" />
  </Form.Group>
</Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{
              this.setState({
                saveModal:false
              })
          }}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
              this.setState({
                saveModal:false
              })
          }}>
            Save
          </Button>
        </Modal.Footer>
    </Modal>


<div className="py-5">
<Table striped bordered hover >
  <thead>
    <tr>
      <th>Image</th>
      <th>Name</th>
      <th>Servings</th>
      <th>Preptime</th>
      <th>Cook time</th>
      <th>Created Date</th>
      <th>Last Update</th>
      <th>View</th>
      <th>Update</th>
      
    </tr>
  </thead>
  <tbody>

  {this.state.foods.map(function (data, index) {
      return (
        
        (data.title)
        ?
        <tr key={index}>
    
            <td>
                {/* <img src={data.images} alt="sample77"/> */}
                {
                    (data.images) 
                    ?
                        <img src={"http://localhost:3001/"+data.images.full}  className="img-fluid mx-auto d-block" width="100" />
                    :
                    null
                }
                
            </td>
            <td>{data.title}</td>
            <td>{data.servings}</td>
            <td>{data.prepTime}</td>
            <td>{data.cookTime}</td>
            <td>{data.postDate}</td>
            <td>{data.editDate}</td>
            <td>
            <Link to={"/view/"+data.uuid}>
                    <Button variant="primary">View</Button>
            </Link>
           
            </td>
            <td>
            <Button variant="success" onClick={()=>{
              this.setState({
                updateModal:true,
                edit:data
              })
          }}>Update</Button>
            </td>
        </tr>
        :
        null



      );
    }, this)}


  </tbody>
</Table>
</div>
           



                </Container>

                <Footer/>
            </div>
        );
    }
}
 
export default withRouter(App);