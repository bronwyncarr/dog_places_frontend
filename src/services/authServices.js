import axios from "axios";

export async function authFetch(url, method, body) {
  try {
    const response = await axios.get(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: body,
    });
    return response.data;
  } catch (err) {
    return err;
  }
}

/// needs to change for axios
export async function authFetchNoResponse(url, method, body) {
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: body,
  });
  return response;
}
