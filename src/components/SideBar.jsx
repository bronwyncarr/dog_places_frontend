import { SideBarWrapper } from "../styles/Layout";

function SideBar({ children }) {
  return (
    <SideBarWrapper>
      {children.map((child) => (
        <li>{child}</li>
      ))}
    </SideBarWrapper>
  );
}

export default SideBar;
