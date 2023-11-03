import IngridientsComponent from './IngridientsComponent';
import INGREDIENTS from './IngridientsComponent';
import Ingredient from './Ingredient/Ingredient';
import DeleteButton from './DeleteButton/DeleteButton';
import Burger from './Burger/Burger';
import './App.css';
import { useState } from 'react';


function App() {
  const [elements, setElements] = useState([
    { name: 'Meat', count: 0 },
    { name: 'Cheese', count: 0 },
    { name: 'Salat', count: 0 },
    { name: 'Bacon', count: 0 },
  ]);

  const [totalPrice, setTotalPrice] = useState(0);


  const onClickIngredients = (index: number) => {
    const incridientCount = { ...elements[index] };
    incridientCount.count++;
    const incridientCountCopy = [...elements];
    incridientCountCopy[index] = incridientCount;
    setElements(incridientCountCopy);

    const totalPrice = calculateTotal();
    setTotalPrice(totalPrice);
  };

  const findName = (elementName: string) => {
    const foundElement = INGREDIENTS.find((ingredient) => ingredient.name === elementName);
    if (foundElement) {
      return foundElement.price;
    }
    return 0;
  };

  const calculateTotal = () => {
    const total = elements.reduce((acc, element) => {
      const ingredientPrice = findName(element.name);
      return acc + element.count * ingredientPrice;
    }, 0);

    return total;
  };

  const removeElement = (name: string) => {
    const removedElement = INGREDIENTS.find((ingredient) => ingredient.name === name);
    if (removedElement) {
      const updatedElements = elements.map((element) => {
        if (element.name === name) {
          return {
            ...element,
            count: Math.max(0, element.count - 1)
          };
        }
        return element;
      });

      setElements(updatedElements);
      const total = calculateTotal();
      setTotalPrice(total);
    }
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
                  count={elements[index].count}
                />
                <span>{ingredient.name}</span>
                <span>x {elements[index].count}</span>
                <DeleteButton
                  image={''}
                  onClickChange={() => removeElement(ingredient.name)}/>
              </div>
            ))}
          </div>
        </div>
        <div className='visualizer-burger-box'>
          <span>Burger</span>
          <Burger
            count={
              (elements.find((element) => element.name === 'Meat')?.count || 0) +
              (elements.find((element) => element.name === 'Cheese')?.count || 0) +
              (elements.find((element) => element.name === 'Bacon')?.count || 0) +
              (elements.find((element) => element.name === 'Salat')?.count || 0)
            }
          />
          <span>Total price: {totalPrice} </span>
        </div>
      </div>
    </div>
  );
}

export default App;
