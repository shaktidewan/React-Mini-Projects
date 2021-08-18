import React from 'react';
import './Order.css';

const Order = (props) => {
    return(
        <div className='Order'>
            <p>ingredients: <span
            style={{
                textTransform:'capitalize',
                display: 'inline-block',
                margin:'0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            >Salad (1)</span>
            <span
            style={{
                textTransform:'capitalize',
                display: 'inline-block',
                margin:'0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            >Cheese (2)</span>
            </p>
            <p>ingredients: <strong>USD 122.</strong></p>
        </div>
    );
}

export default Order;