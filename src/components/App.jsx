import { Switch, Route } from "react-router-dom";

import { useReducer, useEffect } from "react";
import NewUser from "./NewUser";
import NewSession from "./NewSession";
import SideBar from "./SideBar";
import Location from "./Location";
import Locations from "./Locations";
import NewLocation from "./NewLocation";
import Favourites from "./Favourites";
import EditLocation from "./EditLocation";
import {
  SideBarWrapper,
  Layout,
  SideBarLink,
  Content,
  SideBarHeading,
} from "../styles/Layout";
import reducer from "../utils/reducer";
import { StateContext } from "../utils/context";
import { getLocations } from "../services/locationServices";

function App() {
  const initialState = {
    locations: [],
    loggedInUser: null,
    auth: { token: null },
  };

  // Sets initial state (default values) to global state
  const [store, dispatch] = useReducer(reducer, initialState);

  function logout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
  }

  return (
    <Layout>
      <StateContext.Provider value={{ store, dispatch }}>
        <SideBarWrapper>
          <SideBarHeading>🐾 OFF THE LEASH</SideBarHeading>
          <SideBar>
            <SideBarLink to="/">Search</SideBarLink>
            <SideBarLink to="/favourites">My Favourites</SideBarLink>
            <SideBarLink to="/locations/new">Add a location</SideBarLink>
            <SideBarLink to="/sign_up">Sign Up</SideBarLink>
            <SideBarLink to="/sign_in">Sign In</SideBarLink>
            <SideBarLink to="/" onClick={logout}>
              Sign Out
            </SideBarLink>
          </SideBar>
        </SideBarWrapper>
        <Content>
          <Switch>
            <Route exact path={["/", "/locations"]} component={Locations} />
            <Route exact path="/favourites" component={Favourites} />
            <Route exact path="/locations/new" component={NewLocation} />
            <Route exact path="/locations/:id" component={Location} />
            <Route exact path="/locations/:id/edit" component={EditLocation} />
            <Route exact path="/sign_up" component={NewUser} />
            <Route exact path="/sign_in" component={NewSession} />
          </Switch>
        </Content>
      </StateContext.Provider>
    </Layout>
  );
}

export default App;
