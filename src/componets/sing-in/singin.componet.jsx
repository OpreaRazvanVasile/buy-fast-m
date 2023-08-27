import { useEffect,useState} from "react"
import { singInWithGoogle,createUsersDocument,redirectSingIn,auth} from "../../utils/fierbase/fierbase.utils"
import { getRedirectResult } from "firebase/auth"
import SingUp from "../sing-up/sing-up.componet"



const SingIn= () =>{


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
  
    
  }
 


    return(
    <div>

        <button onClick={logWithGoogle}>Sing In With Google</button>
        <button onClick={async()=>await redirectSingIn()}>Sing In With Redirect</button>
       
        <SingUp/>
    </div>
    )
}

export default SingIn