import { useEffect} from "react"
import { singInWithGoogle,createUsersDocument,redirectSingIn,auth} from "../../utils/fierbase/fierbase.utils"
import { getRedirectResult } from "firebase/auth"

const Shop = () =>{

const logWithGoogle=async function(){
    
  const response=await singInWithGoogle()
  const createDocumentDB=await createUsersDocument(response.user)

  
}
useEffect(()=>{
    const redirectResponse=async function(){

        const response= await getRedirectResult(auth)
        if(response){
            const createDocumentDB=await createUsersDocument(response.user)  
        }
    }
    redirectResponse()


},[])
 

    return(
    <div>
        <button onClick={logWithGoogle}>Sing In With Google</button>
        <button onClick={async()=>await redirectSingIn()}>Sing In With Redirect</button>
    </div>
    )
}

export default Shop   