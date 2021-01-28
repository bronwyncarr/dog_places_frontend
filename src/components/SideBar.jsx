import { SideBarList } from "../styles/Layout";

function SideBar({ children }) {
  return (
    <SideBarList>
      {children.map((child, index) => (
        <li key={index}>{child}</li>
      ))}
    </SideBarList>
  );
}

export default SideBar;
