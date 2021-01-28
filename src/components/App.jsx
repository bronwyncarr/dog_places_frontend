import { Switch, Route } from "react-router-dom";

import SideBar from "./SideBar";
import Location from "./Location";
import Locations from "./Locations";
import NewLocation from "./NewLocation";
import Favourites from "./Favourites";
import {
  SideBarWrapper,
  Layout,
  SideBarLink,
  Content,
  SideBarHeading,
} from "../styles/Layout";

function App() {
  return (
    <Layout>
      <SideBarWrapper>
        <SideBarHeading>🐾 OFF THE LEASH</SideBarHeading>
        <SideBar>
          <SideBarLink to="/">Search</SideBarLink>
          <SideBarLink to="/favourites">My Favourites</SideBarLink>
          <SideBarLink to="/locations/new">Add a location</SideBarLink>
          <SideBarLink to="/signout">Sign Out</SideBarLink>
        </SideBar>
      </SideBarWrapper>
      <Content>
        <Switch>
          <Route exact path={["/", "/locations"]} component={Locations} />
          <Route exact path="/favourites" component={Favourites} />
          <Route exact path="/locations/new" component={NewLocation} />
          <Route exact path="/locations/:id" component={Location} />
        </Switch>
      </Content>
    </Layout>
  );
}

export default App;
