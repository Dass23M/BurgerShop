import React from 'react';
import './Programs.css';

import Burger1 from '../../assets/burger-1.jpg';
import Burger2 from '../../assets/burger-2.jpg';
import Burger3 from '../../assets/burger-3.jpg';

const Programs = () => {
  const images = [Burger1, Burger2, Burger3];

  return (
    <div className="Burger_color">
      <div className="BurgerType">
        {images.map((image, i) => (
          <div className="burgertypes" key={i}>
            <img src={image} alt={`Burger ${i + 1}`} />
            <div className="caption">
              <p>Burger {i + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
