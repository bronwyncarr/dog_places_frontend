import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './Home'
import {Map } from './Map'
export function Nav(){
  return(
    <Router>

    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/map'>Map</Link>
        
      </nav>
     
      <Switch>
        <Route exact path='/' component={Home}>
          
        </Route>
        <Route exact path='/map' component={Map}>
          
        </Route>
          
        
      </Switch>
    </div>
    </Router>
  )
  
}