import React from 'react';
import './PizzaImage.css';
import PizzaImage from '../../assets/pizza.jpg';

const pizzaImage = (props) => (
    <div className='PizzaImage'>
        <img src={PizzaImage} className='PizzaImg'/>
    </div>
);

export default pizzaImage;