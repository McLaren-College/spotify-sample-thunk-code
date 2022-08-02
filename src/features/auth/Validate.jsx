import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { REDIRECT_URI, SECRET_CLIENT } from '../../constants';
import { getToken, updateToken } from './authSlice';

export default function Validate(props) {
    let [params,] = useSearchParams();
    let dispatch = useDispatch();
    let goTo = useNavigate();
    let { loading, error } = useSelector(state => state.auth);

    useEffect(() => {
        if (!loading && error === null)
            goTo('/profile');
    }, [loading])

    useEffect(() => {
        let code = params.get('code');
        dispatch(getToken(code));
    }, [])

    return (
        <div className='center'>{ error !== null ? error : 'Loading...'}</div>
    )
}

// http://localhost:3000/validate?code=AQA1oHCcgo2zM1oQ-BDOBfGMxA1Y9aabvUgV-vYiHm6Uy_4H2q-Zae0I19WbUdErRsD0Hni9TF6L81n8Ew1Iq13531Yv0uZXwuqeU4CrD-SJ62HDhotxD2k71eJzDyV4UZQcjnr_M5QQuwhuBI8se5os_NhrvURcxNMzvqDTwm1FykwxHaq5AQC-urmWr-l8T0cqdhw3-SnuvRTarDSRe2V4UcHVmYW8ynYRbA2M-rsi8jdIctC4OSo1tB7JpMwY9rpooO0R5o3UyXJz0H9VKuZYsQRP