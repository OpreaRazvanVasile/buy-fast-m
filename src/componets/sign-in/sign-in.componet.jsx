
 import { useEffect,useState} from "react"

import InputForm from "../input-form/input-form.componet"
 import Button from "../button/button.componet"

import { createUsersDocument,auth, singInWithGoogle,redirectSingIn,singInWithEmail}
    from "../../utils/fierbase/fierbase.utils"
import { getRedirectResult } from "firebase/auth"    
import './sign-in.styles.scss'





const defaultInputData={
    email:'',
    password:'',

}


const SingIn=()=>{
    const[formInputData,setFormInputData]=useState(defaultInputData)
    const {email,password}=formInputData
        useEffect(()=>{
        const redirectResponse=async function(){
    
            const response= await getRedirectResult(auth)
            if(response){
                const createDocumentDB=await createUsersDocument(response.user)  
            }
        } 
        redirectResponse()
    
    
    },[])
        
    const logWithGoogle=async function(){
        
        const response=await singInWithGoogle()
        const createDocumentDB=await createUsersDocument(response.user)
         return createDocumentDB
        
      }
         
      
      const changeHandler=function(event){
        event.preventDefault()
       const{name,value}=event.target
       setFormInputData(()=>{return{...formInputData,[name]:value}})
      

    
      
       }
    
    
    const submitHandler=async(e)=>{
    e.preventDefault()

        const res=await  singInWithEmail(email,password)
        console.log(res)
        setFormInputData(defaultInputData)
        return res
        
       
    
}
    
        return (
        <div className="sign-in-container">
            
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>

        <form onSubmit={submitHandler}>
        <InputForm label="Email" type="email" required name="email" onChange={changeHandler} value={email}></InputForm>
        <InputForm label="Password" type="password"required name="password"value={password} onChange={changeHandler}></InputForm>
        <div className="btn-container">
        <Button type='submit' children='Sign In'/>
        <Button type='button' typeButton='google'  onClick={logWithGoogle} children='Google'/>
        <Button type='button' typeButton='redirect' children='Redirect' onClick={async()=>await redirectSingIn()}/>
        </div>
        </form>
      
   
        </div>
    )



    

}





export default SingIn