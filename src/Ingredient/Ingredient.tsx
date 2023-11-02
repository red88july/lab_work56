// import DeleteButton from '../DeleteButton/DeleteButton';
import './Ingridient.css';
import React from 'react';

interface IngridientsButton {
  name: string,
  image: string,
  price: number,
}

const Ingredient: React.FC<IngridientsButton> = (props) => {
  return (
    <div className='elements-boxes'>
      <button type='button' className='ingr-btn'>
        <img src={props.image} alt={props.name} className='ingr-img'/>
      </button>
      {/*<span>{props.name}</span>*/}
      {/*<span>x 0</span>*/}
      {/*<DeleteButton image={''}/>*/}
    </div>
  );
};

export default Ingredient;