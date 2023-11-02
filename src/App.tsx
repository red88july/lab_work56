import './App.css';
import Ingredient from './Ingredient/Ingredient';
import IngridientsComponent from './IngridientsComponent';
import DeleteButton from './DeleteButton/DeleteButton';


function App() {
    return (
      <div className='main-box'>

        <h3 className='title-burger'>ᗰᗩKE YOᑌᖇ ᗷEᔕT ᗷᑌᖇGEᖇ!</h3>

        <div className='box-items'>
          <div className='ingridients-box'>
            <span>Ingridients</span>
              <div className='ingridients-items'>
                {IngridientsComponent.map((ingredient, index) => (
                  <div key={index} className='ingridients-element'>
                    <Ingredient
                      key={index}
                      name={ingredient.name}
                      price={ingredient.price}
                      image={ingredient.image}
                    />
                    <span>{ingredient.name}</span>
                    <DeleteButton image={''}/>
                  </div>
                ))}
              </div>

         </div>
          <div className='visualizer-burger-box'>
            <span>Burger</span>
          </div>
        </div>

      </div>
    );
}

export default App;