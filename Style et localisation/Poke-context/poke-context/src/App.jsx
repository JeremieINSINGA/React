import './App.css'
import Home from "./components/Home"
import Login from "./components/Login"

import { BrowserRouter, Route, Link, Switch } from "react-router-dom"
import Home from './components/Home'
import Login from './composants/Login'
function App(){
  return (
    <BrowserRouter>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="Login">Login</Link></li>
      </ul>
    </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}



export default App;

