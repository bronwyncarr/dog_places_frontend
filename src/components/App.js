import { Switch, Route } from "react-router-dom";

import SideBar from "./SideBar";
import Location from "./Location";
import Locations from "./Locations";
import NewLocation from "./NewLocation";
import Favourites from "./Favourites";
import { SideBarLink } from "../styles/SideBar";

function App() {
  return (
    <div>
      <SideBar>
        <SideBarLink to="/">Search</SideBarLink>
        <SideBarLink to="/favourites">My Favourites</SideBarLink>
        <SideBarLink to="/locations/new">Add a location</SideBarLink>
        <SideBarLink to="/signout">Sign Out</SideBarLink>
      </SideBar>
      <Switch>
        <Route exact path={["/", "/locations"]} component={Locations} />
        <Route exact path="/favourites" component={Favourites} />
        <Route exact path="/locations/new" component={NewLocation} />
        <Route exact path="/locations/:id" component={Location} />
      </Switch>
    </div>
  );
}

export default App;
