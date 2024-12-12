import React, { useState } from 'react';
import './Menu.css';

import Burger1 from '../../assets/burger1.jpg';
import Burger2 from '../../assets/burger2.jpg';
import Burger3 from '../../assets/burger3.jpg';
import Burger4 from '../../assets/burger4.jpg';
import Burger5 from '../../assets/burger5.jpg';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('Cheese_Burger');

  const details = {
    Cheese_Burger: {
      image: Burger1,
      price: "$8.99",
      description: "Classic cheeseburger with a juicy beef patty, melted cheese, and fresh toppings."
    },
    Double_Decker: {
      image: Burger2,
      price: "$12.99",
      description: "Double beef patties, double cheese, lettuce, tomato, and our special sauce."
    },
    BBQ_Burger: {
      image: Burger3,
      price: "$10.99",
      description: "A smoky BBQ flavor with crispy bacon, cheddar cheese, and caramelized onions."
    },
    Truffle_Burger: {
      image: Burger4,
      price: "$14.99",
      description: "A luxurious burger with truffle aioli, arugula, and Swiss cheese."
    },
    Greek_Burger: {
      image: Burger5,
      price: "$11.49",
      description: "Mediterranean-inspired burger with feta cheese, olives, cucumber, and tzatziki sauce."
    }
  };

  return (
    <section className="menu-section">
      <div className="menu-container">
        <h2 className="menu-title">Our Menu</h2>

        {}
        <div className="menu-categories">
          {Object.keys(details).map((category) => (
            <button
              key={category}
              className={`menu-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.replace('_', ' ')}
            </button>
          ))}
        </div>

        {}
        <div className="menu-display">
          <img src={details[selectedCategory].image} alt={selectedCategory} />
          <div className="menu-details">
            <h3>{selectedCategory.replace('_', ' ')}</h3>
            <p>{details[selectedCategory].description}</p>
            <span className="price">{details[selectedCategory].price}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
