import { Switch, Route } from "react-router-dom";
import { useReducer } from "react";
import NewUser from "./NewUser";
import NewSession from "./NewSession";
import Location from "./Location";
import Locations from "./Locations";
import NewLocation from "./NewLocation";
import Favourites from "./Favourites";
import EditLocation from "./EditLocation";
import SignOut from "./Signout";
import { Layout, Content } from "../styles/Layout";
import reducer from "../utils/reducer";
import { StateContext } from "../utils/context";
import SideBar from "./SideBar";
import { ProtectedRoute } from "./ProtectedRoute";

function App() {
  const initialState = {
    locations: [],
    loggedInUser: null,
    auth: { token: null },
  };

  // Sets initial state (default values) to global state
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <Layout>
      <StateContext.Provider value={{ store, dispatch }}>
        <SideBar />
        <Content>
          <Switch>
            <Route exact path={["/", "/locations"]} component={Locations} />
            <ProtectedRoute exact path="/favourites" component={Favourites} />
            <ProtectedRoute
              exact
              path="/locations/new"
              component={NewLocation}
            />
            <Route exact path="/locations/:id" component={Location} />
            <Route exact path="/locations/:id/edit" component={EditLocation} />
            <Route exact path="/sign_up" component={NewUser} />
            <Route exact path="/sign_in" component={NewSession} />
            <Route exact path="/sign_out" component={SignOut} />
          </Switch>
        </Content>
      </StateContext.Provider>
    </Layout>
  );
}

export default App;
