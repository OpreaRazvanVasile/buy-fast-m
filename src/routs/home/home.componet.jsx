import Directory from "../../componets/directory/directory.componet"
import categories from './categories.json'



const Home = () => {
    return (
        <div className="App">
            <Directory categories={categories}></Directory>
        </div>
    )
}
export default Home


