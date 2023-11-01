import meetImage from './assets/meet.png';
import cheeseImage from './assets/cheese.png';
import salatImage from './assets/salat.png';
import baconImage from './assets/bacon.png';

interface Igridient {
  name: string,
  price: number,
  image: string,
}

const INGREDIENTS: Igridient[] = [
  {name: 'Meat', price: 80, image: meetImage},
  {name: 'Cheese', price: 50, image: cheeseImage},
  {name: 'Salat', price: 10, image: salatImage},
  {name: 'Bacon', price: 60, image: baconImage},
];

export default INGREDIENTS;