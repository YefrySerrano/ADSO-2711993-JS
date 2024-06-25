import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import Cookies from 'universal-cookie'

export default function GoogleOAuth() {
    const cookies = new Cookies()
  return (
    <div>
        <GoogleOAuthProvider clientId='413030369306-9r79ohnqmuuid3hn22eb8slmmgnlp3s5.apps.googleusercontent.com'>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    const credentialResponseDecode = jwtDecode(credentialResponse.credential)
                    console.log(credentialResponseDecode.name);
                    cookies.set('email', credentialResponseDecode.email, {
                        secure: true,
                        sameSite: 'None',
                        path: '/',
                    })
                    cookies.set('names', credentialResponseDecode.name, {
                        secure: true,
                        sameSite: 'None',
                        path: '/',
                    })
                    window.location.hash = '/sesion';
                }}
                onError={() => {
                    console.log('Login Failed')
                }}
            />
        </GoogleOAuthProvider>
    </div>
  )
}