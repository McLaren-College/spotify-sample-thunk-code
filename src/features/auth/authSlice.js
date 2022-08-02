import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ACCESS_TOKEN_KEY, REDIRECT_URI, REFRESH_TOKEN_KEY, SECRET_CLIENT } from "../../constants";


let getToken = createAsyncThunk('auth/getToken', async (code) => {
    let response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + SECRET_CLIENT
        },
        body: new URLSearchParams({
            'grant_type': 'authorization_code',
            'code': code,
            'redirect_uri': REDIRECT_URI
        }).toString()
    });
    if (response.status !== 200) {
        throw new Error('Something went wrong...' + response.statusText)
    }

    let data = await response.json();
    return { accessToken: data.access_token, refreshToken: data.refresh_token}
});

let getUserInfo = createAsyncThunk('auth/getUserInfo', async (accessToken) => {
    let userProfileResponse = await fetch('https://api.spotify.com/v1/me', {
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    });

    let userData = await userProfileResponse.json();
    return userData;
})


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        accessToken: window.localStorage.getItem(ACCESS_TOKEN_KEY),
        refreshToken: window.localStorage.getItem(REFRESH_TOKEN_KEY),
        loading: true,
        error: null
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getToken.fulfilled, (state, action) => {
                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
                window.localStorage.setItem(ACCESS_TOKEN_KEY, action.payload.accessToken)
                window.localStorage.setItem(REFRESH_TOKEN_KEY, action.payload.refreshToken);
                state.loading = false;
            }).addCase(getToken.pending, (state, action) => {
                state.loading = true;
            }).addCase(getToken.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            }).addCase(getUserInfo.fulfilled, (state, action) => {
                state.user = action.payload;
            })
    }
})

export default authSlice.reducer;

export const { updateToken, setUser, getTokenFromStorage } = authSlice.actions;

export { getToken, getUserInfo }