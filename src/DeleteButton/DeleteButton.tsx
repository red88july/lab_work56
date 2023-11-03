import './DeleteButton.css';
import React from 'react';

interface Basket {
  image: string,
  onClickChange: () => void;
}

const DeleteButton: React.FC<Basket> = (props) => {
  return (
    <button className='remove-btn' type='button' onClick={props.onClickChange}></button>
  );
};

export default DeleteButton;