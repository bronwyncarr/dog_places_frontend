import { useEffect } from "react";
import { useGlobalState } from "../utils/context";

function Signout() {
  const { dispatch } = useGlobalState();
  useEffect(() => {
    dispatch({ type: "removeLoggedInUser", data: null });
    localStorage.removeItem("token");
  }, []);
  return <h1>Thanks for visiting. </h1>;
}

export default Signout;
