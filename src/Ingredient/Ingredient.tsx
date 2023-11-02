import './Ingridient.css';
import {IngridientsButton} from '../types';
import React from 'react';

const Ingredient: React.FC<IngridientsButton> = (props) => {
  return (
    <div className='elements-boxes'>
      <button type='button' className='ingr-btn' onClick={props.onClick}>
        <img src={props.image} alt={props.name} className='ingr-img'/>
      </button>
    </div>
  );
};

export default Ingredient;