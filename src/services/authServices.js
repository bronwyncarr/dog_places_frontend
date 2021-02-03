export async function authFetch(url, method, body) {
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: body,
  });
  if (method !== "DELETE") {
    const data = await response.json();
    return data;
  } else {
    return response;
  }
}
