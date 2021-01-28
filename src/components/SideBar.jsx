import { SideBarList } from "../styles/Layout";

function SideBar({ children }) {
  return (
    <SideBarList>
      {children.map((child) => (
        <li>{child}</li>
      ))}
    </SideBarList>
  );
}

export default SideBar;
