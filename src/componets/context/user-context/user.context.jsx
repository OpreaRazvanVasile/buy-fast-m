
import { createContext,useState } from "react";

export const UserContext=createContext({
   currnetUser:null,
   setCurrentUser:()=>{}
})

export const UserProvider=({children})=>{

    const[currnetUser,setCurrentUser]=useState(null)
     const value={currnetUser,setCurrentUser}
   return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}