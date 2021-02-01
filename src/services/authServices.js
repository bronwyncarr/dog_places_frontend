export async function AuthFetch(url, method) {
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await response.json();
  return data;
}

// export async function signIn(body) {
//   const response = await fetch(`http://localhost:3000/api/auth/sign_in`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });
//   if (response.status >= 400) {
//     throw new Error("incorrect credentials");
//   } else {
//     const { jwt } = await response.json();
//     localStorage.setItem("token", jwt);
//   }
//   return response;
// }
