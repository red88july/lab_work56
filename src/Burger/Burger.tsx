import './Burger.css';

interface BurgerProps {
  count: number;
}

const Burger: React.FC<BurgerProps> = (props) => {
  const { count } = props;

  const Meat = () => {
    const MeatElement = [];
    for (let i = 0; i < count; i++) {
      MeatElement.push(<div key={i} className="Meat"></div>);
    }
    return MeatElement;
  };

  const Cheese = () => {
    const CheeseElement = [];
    for (let i = 0; i < count; i++) {
      CheeseElement.push(<div key={i} className="Cheese"></div>);
    }
    return CheeseElement;
  };

  const Salat = () => {
    const SalatElement = [];
    for (let i = 0; i < count; i++) {
      SalatElement.push(<div key={i} className="Salat"></div>);
    }
    return SalatElement;
  };

  const Bacon = () => {
    const BaconElement = [];
    for (let i = 0; i < count; i++) {
      BaconElement.push(<div key={i} className="Bacon"></div>);
    }
    return BaconElement;
  };

  return (
    <div className="main-burger-box">
      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        {Meat()}
        {Cheese()}
        {Salat()}
        {Bacon()}
        <div className="BreadBottom"></div>
      </div>
    </div>
  );
};

export default Burger;
