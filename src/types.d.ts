export interface IngridientsButton {
  name: string,
  image: string,
  price: number,
  count: number,
  onClick: () => void;
}

export interface Burger {
  count: number,
}