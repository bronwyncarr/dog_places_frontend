import SideBarItems from "./SideBarItems";
import { useGlobalState } from "../utils/context";
import { SideBarLink, SideBarHeading } from "../styles/Layout";

function SideBar() {
  const { store } = useGlobalState();
  const { loggedInUser } = store;

  function logout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
  }
  console.log(loggedInUser);
  return (
    <>
      <SideBarHeading>🐾 OFF THE LEASH</SideBarHeading>
      <SideBarItems>
        <SideBarLink to="/">Search</SideBarLink>
        <SideBarLink to="/favourites">My Favourites</SideBarLink>
        <SideBarLink to="/locations/new">Add a location</SideBarLink>
        <SideBarLink to="/sign_up">Sign Up</SideBarLink>
        <SideBarLink to="/sign_in">Sign In</SideBarLink>
        <SideBarLink to="/" onClick={logout}>
          Sign Out
        </SideBarLink>
      </SideBarItems>
    </>
  );
}

export default SideBar;
