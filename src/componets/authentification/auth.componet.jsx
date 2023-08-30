import SignUp from "../sign-up/sign-up.componet";
import SingIn from "../sign-in/sign-in.componet";
import { Fragment } from "react";
import './auth.styles.scss'

const Auth=()=>
<div className="auth-container">
<SingIn/>
<SignUp/>

</div>


export default Auth