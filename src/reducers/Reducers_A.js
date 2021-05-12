
import { combineReducers } from "redux";

const petCounter = (state = 1, action) => {
    switch (action.type) {
      case "PET_INCREASED":
        return state + action.payload;
      case "PET_DECREASED":
        return state - 1;
      default:
        return state;
    }
};



const getFood = () => {

  let url = new URL('http://localhost:3001/recipes')

  // +"T23:59:59.999"

  var filter = {
    page: 1
  }

  url.search = new URLSearchParams(filter);
            
    return fetch(url,{
        method: 'GET',
    })
    .then(response => response.json());
};

  

const reducers = combineReducers({
  petCounter,getFood
});

export default reducers;
