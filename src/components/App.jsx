import { Switch, Route } from "react-router-dom";
import { useReducer } from "react";
import NewUser from "./Users//NewUser";
import NewSession from "./Users/NewSession";
import Location from "./Location/Location";
import Locations from "./Locations";
import NewLocation from "./Location/NewLocation";
import Favourites from "./Favourites/Favourites";
import EditLocation from "./Location/EditLocation";
import SignOut from "./Users/Signout";
import { Layout, Content } from "../styles/Layout";
import reducer from "../utils/reducer";
import { StateContext } from "../utils/context";
import SideBar, { SideBarLink } from "./Sidebar/SideBar";
import { ProtectedRoute } from "./ProtectedRoute";
import NotFound from "./NotFound";
import jwt_decode from "jwt-decode";

function App() {
  // Check expirey date of token
  const token = localStorage.getItem("token");
  const decodedToken = token ? jwt_decode(token) : null;
  const timeNow = new Date().getTime();
  const tokenValid = token && decodedToken.exp * 1000 > timeNow;

  // Initial state including boolean for loggedInUser logic of token expiry date.
  const initialState = {
    loggedInUser: tokenValid,
    staticAssets: {},
    loggedInAdmin: false,
  };

  // Sets initial state (default values) to global state
  const [store, dispatch] = useReducer(reducer, initialState);

  // Protected routes including, show location, new location and favourites are not available unless loggedIn
  return (
    <Layout>
      {/* Entire app uses context for logged in user/admin */}
      <StateContext.Provider value={{ store, dispatch }}>
        <SideBar>
          <SideBarLink to="/">
            <i className="fas fa-search"></i> Search
          </SideBarLink>
          <SideBarLink to="/favourites">
            <i className="fas fa-star"></i> My Favourites
          </SideBarLink>
          <SideBarLink to="/locations/new">
            <i className="fas fa-plus"></i> Add a location
          </SideBarLink>
          {initialState.loggedInUser ? (
            <SideBarLink to="/sign_out">
              <i className="fas fa-sign-out-alt"></i> Sign Out
            </SideBarLink>
          ) : (
            <>
              <SideBarLink to="/sign_up">
                <i className="fas fa-user-plus"></i> Sign Up
              </SideBarLink>
              <SideBarLink to="/sign_in">
                <i className="fas fa-sign-in-alt"></i> Sign In
              </SideBarLink>
            </>
          )}
        </SideBar>
        <Content>
          {/* Switch for routes and protected routes */}
          <Switch>
            <Route exact path={["/", "/locations"]} component={Locations} />
            <ProtectedRoute exact path="/favourites" component={Favourites} />
            <ProtectedRoute
              exact
              path="/locations/new"
              component={NewLocation}
            />
            <ProtectedRoute exact path="/locations/:id" component={Location} />
            <ProtectedRoute
              exact
              path="/locations/:id/edit"
              component={EditLocation}
            />
            <Route exact path="/sign_up" component={NewUser} />
            <Route exact path="/sign_in" component={NewSession} />
            <Route exact path="/sign_out" component={SignOut} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Content>
      </StateContext.Provider>
    </Layout>
  );
}

export default App;
