import React from 'react'
import { GoogleOAuthProvider} from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from "jwt-decode";
import Cookies from 'universal-cookie';

function GoogleOAuth (options) {
    const cookies = new Cookies();
    return (
        <div>
            <GoogleOAuthProvider clientId= '423217426614-2n4urk2634cq8g1nuuvuni3541530194.apps.googleusercontent.com'>
                <GoogleLogin 
                    onSuccess={credentialReponse => {
                        const credentialReponseDecode = jwtDecode(credentialReponse.credential)
                        cookies.set('email', credentialReponseDecode.email,{
                            secure: true,
                            sameSite: 'None',
                            path: '/'
                        })
                        cookies.set('nombres', credentialReponseDecode.name,{
                            secure: true,
                            sameSite: 'None',
                            path: '/'
                        })
                        window.location.hash = '/sesion'

                    }}
                    onError={()=>{
                        console.log("Login Failed")
                    }}

            />    
            </GoogleOAuthProvider>
        </div>
    )
   
}
export default GoogleOAuth