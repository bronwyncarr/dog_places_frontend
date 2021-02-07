import SideBarItems from "./SideBarItems";
import { SideBarWrapper, SideBarLink, SideBarHeading } from "../styles/Layout";
import { useGlobalState } from "../utils/context";

function SideBar() {
  const { store } = useGlobalState();
  const { loggedInUser } = store;
  return (
    <SideBarWrapper>
      <SideBarHeading>
        {" "}
        <i className="fas fa-paw"></i> OFF THE LEASH
      </SideBarHeading>
      <SideBarItems>
        <SideBarLink to="/">
          <i className="fas fa-search"></i> Search
        </SideBarLink>
        <SideBarLink to="/favourites">
          <i className="fas fa-star"></i> My Favourites
        </SideBarLink>
        <SideBarLink to="/locations/new">
          {" "}
          <i className="fas fa-plus"></i> Add a location
        </SideBarLink>
        {loggedInUser ? (
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
            </SideBarLink>{" "}
          </>
        )}
      </SideBarItems>
    </SideBarWrapper>
  );
}

export default SideBar;
