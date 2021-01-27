import { SideBarWrapper, SideBarList } from "../styles/Layout";

function SideBar({ children }) {
  return (
    <SideBarWrapper>
      <SideBarList>
        {children.map((child) => (
          <li>{child}</li>
        ))}
      </SideBarList>
    </SideBarWrapper>
  );
}

export default SideBar;
