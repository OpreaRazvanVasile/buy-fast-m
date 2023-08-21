import logo from './logo.svg';
import './App.scss';
import categories from './categories.json'
import Directory from './componets/directory/directory.componet';

function App() {

  return (
    <div className="App">

      <Directory categories={categories}></Directory>
      {/* <div className='categories-container'>
        {categories.map(category => {
          console.log(category.title)
          return (
            <div key={category.id} className='category-container'>
              <img src={category.imageUrl}></img>
              <div className='category-body-container'>
                <h2>{category.title}</h2>
                <p>Shop Now</p>

              </div>

            </div>
          )
        })}
      </div> */}



    </div>
  );
}

export default App;
