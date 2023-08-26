import { singInWithGoogle } from "../../utils/fierbase/fierbase.utils"

const Shop = () =>{

const logWithGoogle=async function(){
  const response=await singInWithGoogle()
  console.log(response)
}
    return(
    <div onClick={async()=>await logWithGoogle()}>
        <button>Sing In With Google</button>
    </div>
    )
}

export default Shop   