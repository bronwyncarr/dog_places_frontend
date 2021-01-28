export async function signUp(data) {
	return {
		username: "Test",
		jwt: "token"
	}
}
export async function signIn(data) {
	return {
		username: "Test",
		jwt: "token"
	}
}
export async function signOut(data) {
	// sign in on server
	return data.username
}