import { useMemo } from "react";

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
