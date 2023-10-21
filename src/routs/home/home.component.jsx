import Directory from '../../componets/directory/directory.component'
// import categories from './categories.json'
import { getDocumentFormDB } from '../../utils/fierbase/fierbase.utils'
import { useEffect,useState } from 'react'



const Home = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        const getDirectoryData=async function(){
          const data= await getDocumentFormDB('directory')
          setData(data)

        }
       getDirectoryData()
    },[])
   
    return (
        <div className="App">
            <Directory categories={data}></Directory>
        </div>
    )
}
export default Home


