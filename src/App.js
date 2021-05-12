
import './style/App.css';

import Home from "./components/Home"
import CmsHome from "./components/CmsHome"
import CmsRecipe from "./components/CmsRecipe"

import  Counting  from './components/redux/Counting';



import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">

    
      <BrowserRouter>
        <Route path="/" exact>
          <CmsHome />
        </Route>

        <Route path="/home" exact>
          <Home />
        </Route>

        <Route path="/view/:id"  exact>
          <CmsRecipe />
        </Route>
        {/* <Route path="/recipe" exact>
          <Recipes />
        </Route>

        <Route path="/recipe" exact>
          <Recipes />
        </Route> */}

      </BrowserRouter>

    </div>
  );
}

export default App;
