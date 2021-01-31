import { SideBarList } from "../styles/Layout";

function SideBarItems({ children }) {
  return (
    <SideBarList>
      {children.map((child, index) => (
        <li key={index}>{child}</li>
      ))}
    </SideBarList>
  );
}

export default SideBarItems;
