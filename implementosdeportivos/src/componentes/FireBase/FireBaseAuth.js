import React from "react";
import { useState } from "react";
import { auth,provider } from "./FireBaseConfig";
import { signInWithPopup } from "firebase/auth";
import Cookies from 'universal-cookie';
import { GitHub } from "@mui/icons-material";

function FireBaseAuth(){
    const [user, setUser] = useState(null)
    const cookies = new Cookies()

    const handleGitHubLogin = () =>{
        signInWithPopup(auth,provider)
            .then((result) => {
                setUser(result.user)
                cookies.set('email',result.user.email,{
                    secure : true,
                    sameSite: 'None',
                    path:'/'
                })
                window.location.hash = '/sesion'
            })
            .catch((error) =>{
                console.log(error)
                
            })
    }

    return (
        <div>
            {user ? (<>{}</>):(<button type ="button" className="btn btn-secondary btn-sm" onClick={handleGitHubLogin}><GitHub/>Acceder con Github</button>)
            
            }

        </div>
    )

}
export default FireBaseAuth;