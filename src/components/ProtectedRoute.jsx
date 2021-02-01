import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useGlobalState } from "../utils/context";

export function ProtectedRoute({ exact, path, component }) {
  const { store } = useGlobalState();
  const { loggedInUser } = store;
  if (!loggedInUser) {
    return <Redirect to="/sign_in" />;
  } else {
    return (
      <>
        <Route exact={exact} path={path} component={component} />
      </>
    );
  }
}
