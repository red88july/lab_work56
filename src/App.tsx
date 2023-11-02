import IngridientsComponent from './IngridientsComponent';
import Ingredient from './Ingredient/Ingredient';
import DeleteButton from './DeleteButton/DeleteButton';
import Burger from './Burger/Burger';
import './App.css';
import {useState} from 'react';

function App() {

  const [ingredientsData, setIngredientsData] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salat', count: 0},
    {name: 'Bacon', count: 0},
  ]);

  const onClickIngredients = (index: number) => {
    const incridientCount = {...ingredientsData[index]};
    incridientCount.count++;
    const  incridientCountCopy = [...ingredientsData];
    incridientCountCopy[index] = incridientCount;
    setIngredientsData(incridientCountCopy);
  };

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
                      onClick={() => onClickIngredients(index)}
                      count={ingredientsData[index].count}
                    />
                    <span>{ingredient.name}</span>
                    <span>x {ingredientsData[index].count}</span>
                    <DeleteButton image={''}/>
                  </div>
                ))}
              </div>
         </div>
          <div className='visualizer-burger-box'>
            <span>Burger</span>
            <Burger />
          </div>
        </div>
      </div>
    );
}

export default App;