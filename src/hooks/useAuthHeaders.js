import { useMemo } from "react";

// This function references the headers including the JWT and used for every axios call.
function useAuthHeaders() {
  const jwt = localStorage.getItem("token");

  const config = useMemo(() => {
    return {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    };
  }, [jwt]);

  return config;
}

export default useAuthHeaders;
