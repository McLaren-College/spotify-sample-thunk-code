import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Login from './features/auth/Login'
import Profile from './features/auth/Profile'
import Validate from './features/auth/Validate'

export default function Main() {
    let goTo = useNavigate();
    let dispatch = useDispatch();
    let { accessToken } = useSelector(state => state.auth)
    useEffect(() => {
        if (accessToken !== null) {
            goTo('profile');
        }
    }, []);
    return (
        <div className='main-container'>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/validate" element={<Validate />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    )
}
