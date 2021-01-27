function SideBar({ children }) {
  return (
    <ul>
      {children.map((child) => (
        <li>{child}</li>
      ))}
    </ul>
  );
}

export default SideBar;
