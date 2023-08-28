import { useState } from "react"
import { createAuthWithEmail ,auth,createUsersDocument} from "../../utils/fierbase/fierbase.utils"






const defaultInputData={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',
}

const SignUp=()=>{
    const[formInputData,setFormInputData]=useState(defaultInputData)
    const {displayName,email,password,confirmPassword}=formInputData
    const changeHandler=function(event){
        event.preventDefault()
       const{name,value}=event.target
       setFormInputData(()=>{return{...formInputData,[name]:value}})
       console.log(formInputData)
    
      
       

    
    }


 const submitHandler=async(e)=>{
  e.preventDefault()
  if(password!==confirmPassword)return alert('Password and Confirm Password dont match')
   const response=await createAuthWithEmail(email,password)
  console.log(response)
if(response){

   if(response.user.displayName===null) response.user.displayName=displayName
   setFormInputData(defaultInputData)
   return await createUsersDocument(response.user)
   

}

 




 }   



    return (
        <div>
            <h1>Sign in whit email and password</h1>
 
        <form onSubmit={submitHandler}>
             <label>Display Name</label>
            <input type="text" required name="displayName" onChange={changeHandler} value={displayName}></input>
            <label>Email</label>
            <input type="email" required name="email" onChange={changeHandler} value={email}></input>
            <label>Password</label>
            <input type="password"required name="password"value={password} onChange={changeHandler} ></input>
            <label>Confirm Password</label>
            <input type="password"required name="confirmPassword" value={confirmPassword} onChange={changeHandler}></input>
            <button type="submit">SingUp</button>
        </form>
        </div>
    )
}

export default SignUp