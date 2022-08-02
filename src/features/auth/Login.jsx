import React, { useEffect } from 'react'
import { LOGIN_URL } from '../../constants'

export default function Login() {
  return (
    <div className='center'>
        <a href={LOGIN_URL}>Login to Spotify</a>
    </div>
  )
}
