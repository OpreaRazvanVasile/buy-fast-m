
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown-logo/crown.svg";
import { UserContext } from "../../contexts/user-context/user.context";
import {useContext, Fragment } from "react";
import { signOutUser } from "../../utils/fierbase/fierbase.utils";


import './navigation.styles.scss'

const Navigation = () => {
     
      const{currnetUser}=useContext(UserContext)
      
    
     const userNameOnMauseOver=(e)=>{
 
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
                     to='/auth' onMouseOver={userNameOnMauseOver} onClick={signOutUser}>SIGN OUT </Link>:
                    <Link className="nav-link"  to='/auth' >SIGN IN</Link>
                    }
                    <Link className="nav-link" to='/shop'>SHOP</Link>
                   
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}
export default Navigation

