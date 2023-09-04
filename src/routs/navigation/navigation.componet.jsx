
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "./crown.svg";
import { UserContext } from "../../componets/context/user-context/user.context";
import { useState,useContext, Fragment, useEffect  } from "react";
import { signOutUser } from "../../utils/fierbase/fierbase.utils";
import { getDoc } from "firebase/firestore";

import './navigation.styles.scss'

const Navigation = () => {
     
      const{currnetUser,setCurrentUser}=useContext(UserContext)
      console.log(currnetUser)
     const signOutHandler=async()=>{
       await signOutUser()
       setCurrentUser(null)

     }
     const userNameOnMauseOver=(e)=>{
        console.log(e.target.textContent)
        const target= e.target
        if(target.textContent==='SIGN OUT'){
            target.textContent=currnetUser.email.slice(0,6).toUpperCase()
            target.style.color='grey'
            target.style.fontWeight='bolder'
          

        }
        else{
            target.textContent='SIGN OUT'
            target.style.color='black'
            target.style.fontWeight='normal'
            
        }
   
       
     }
     
   
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    {<CrownLogo />}
                </Link>
                <div className="nav-links-container">
                    {currnetUser?<Link className="nav-link"  
                     to='/auth' onMouseOver={userNameOnMauseOver} onClick={signOutHandler}>SIGN OUT </Link>:
                    <Link className="nav-link"  to='/auth' >SIGN IN</Link>
                    }
                   
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}
export default Navigation

