import React, { Component } from 'react';

import { petIncrement, petDecrement } from "../../actions/Action_A";
import { useSelector, useDispatch } from "react-redux";

function App() {

    const petCounter = useSelector((state) => state.petCounter);

    const foods = useSelector((state) => state.getFood);

    console.log(foods)

    const dispatch = useDispatch();
    
    return (
      <div>

        <div className="container">
          <div className="">
            <h1>Redux</h1>
            <button onClick={() => dispatch(petIncrement(1))}>Add pet</button>
            <button onClick={() => dispatch(petDecrement())}>Remove pet</button>
            <h1>Pet counter {petCounter}</h1>
          </div>
        </div>
      </div>
    );
  }
  
  export default App;
  