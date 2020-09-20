import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, img} = props.product;
    return (
        <div>
            <p>{name}</p>
            <img src={img} alt=""/><br/>
            <button onClick={() => props.handleCart(props.product)}>Add Order</button>
        </div>
    );
};

export default Product;