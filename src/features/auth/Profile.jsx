import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo, setUser } from './authSlice';

export default function Profile() {
    let { user, accessToken } = useSelector(state => state.auth);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserInfo(accessToken));
    }, [])
    return (
        <div>
            <h1>Hi, {user !== null && user.display_name}</h1>
        </div>
    )
}
