export async function authFetch(url, method) {
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (method !== "DELETE") {
    const data = await response.json();
    return data;
  } else {
    return response;
  }
}
