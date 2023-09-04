import { initializeApp } from "firebase/app";
import
 {getAuth,
 signInWithPopup,
 GoogleAuthProvider,
 signInWithRedirect,
 createUserWithEmailAndPassword,
 signInWithEmailAndPassword,
 signOut,
 onAuthStateChanged,


 } from "firebase/auth"

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
   
   
} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCyRfRj44mCA5CICrX3t56lqmiY339r8A4",
    authDomain: "buyfast-db.firebaseapp.com",
    projectId: "buyfast-db",
    storageBucket: "buyfast-db.appspot.com",
    messagingSenderId: "980145639110",
    appId: "1:980145639110:web:8a66524ac522caf63691c7",
    measurementId: "G-K2VWZK6JGZ"
  };

  const fierbaseApp=initializeApp(firebaseConfig)

  const provaider=new GoogleAuthProvider()

  provaider.setCustomParameters({
    prompt:"select_account"
  })

  
  export   const auth=getAuth()
  export  const singInWithGoogle=async function(){
   
   try{return await signInWithPopup(auth,provaider)
   }

  catch(err){
    console.error(err.message)
  }
 
}

export const redirectSingIn=async function(){
    return await signInWithRedirect(auth,provaider)
}

export const db=getFirestore()//fierstore DataBase

export const createUsersDocument=async function(userAuth){
    const docRef=doc(db,'users',userAuth.uid)
    console.log(docRef)
    const docSnapShot=await getDoc(docRef)
    console.log(docSnapShot.exists())

    try{
    if(!docSnapShot.exists()){
        console.log(userAuth)
        const{displayName,email}=userAuth
        const setdate=new Date()
        const doc=await setDoc(docRef,{displayName,email,date:setdate})
    

    }
}
 catch(err){
    console.error(err.message)
}


}

export const createAuthWithEmail=async(email,password)=>{
  if(!email||!password)return

try{

  return  await createUserWithEmailAndPassword(auth,email,password)
}

catch(err){

  if(err.code==='auth/email-already-in-use'){
    alert('Email already exists')
  }
  else if(err.code==='auth/weak-password'){
    alert( 'Password should be at least 6 characters')
  }
  else {
    alert(err.message)
  }
}
  


 

}

export const singInWithEmail=async(email,password)=>{
  if(!email||!password)return

try{

  return  await signInWithEmailAndPassword(auth,email,password)
}

catch(err){

 console.log(err)
 if(err.code==='auth/user-not-found'){
  alert("User are not found in the datebase")
 }
 else if(err.code==='auth/wrong-password'){
  alert("Password its wrong")
 }
 else {
  alert(err.message)
 }
 
}
  


 

}

export const signOutUser=async()=>{
  try{
    await signOut(auth)

  }
  catch(error){
    alert(error.message)
  }

}


export const authStateChangedListener=(callback)=>{
if(!callback)return
return onAuthStateChanged(auth,callback)
}

