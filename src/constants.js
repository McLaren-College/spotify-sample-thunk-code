const REDIRECT_URI = 'http://localhost:3000/validate'
const LOGIN_URL = 'https://accounts.spotify.com/authorize?response_type=code&client_id=f91f6adf6566451999e1f853c08fc1e6&scope=user-follow-read user-top-read playlist-read-private user-read-recently-played&redirect_uri=' +REDIRECT_URI
const SECRET_CLIENT = 'ZjkxZjZhZGY2NTY2NDUxOTk5ZTFmODUzYzA4ZmMxZTY6NTI5ZjY4YjUyYjcxNDQxOGFlM2I3NDkzM2Q3NDYzOTg='


// Local storage
const ACCESS_TOKEN_KEY= 'access_token';
const REFRESH_TOKEN_KEY= 'REFRESH_token';
export {LOGIN_URL, REDIRECT_URI, SECRET_CLIENT, ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY}