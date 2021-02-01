import SideBarItems from "./SideBarItems";
import { SideBarWrapper, SideBarLink, SideBarHeading } from "../styles/Layout";
import { useGlobalState } from "../utils/context";

function SideBar() {
  const { store } = useGlobalState();
  const { loggedInUser } = store;
  return (
    <SideBarWrapper>
      <SideBarHeading>🐾 OFF THE LEASH</SideBarHeading>
      <SideBarItems>
        <SideBarLink to="/">Search</SideBarLink>
        <SideBarLink to="/favourites">My Favourites</SideBarLink>
        <SideBarLink to="/locations/new">Add a location</SideBarLink>
        {loggedInUser ? (
          <SideBarLink to="/sign_out">Sign Out</SideBarLink>
        ) : (
          <>
            <SideBarLink to="/sign_up">Sign Up</SideBarLink>
            <SideBarLink to="/sign_in">Sign In</SideBarLink>{" "}
          </>
        )}
      </SideBarItems>
    </SideBarWrapper>
  );
}

export default SideBar;
