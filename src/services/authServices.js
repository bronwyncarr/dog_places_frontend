async function AuthFetch(url,method) {
  const response = await fetch(url, {
    "method": method,
    "headers": {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
  })
  const data = await response.json();
  return data;
}

export default AuthFetch;
