import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Shop = () => {
    const fakeData10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(fakeData10);
    const [Cart, setCart] = useState([]);

    const handleCart = (product) => {
        console.log('clicked btn', product)
        const newCart = [...Cart, product];
        setCart(newCart);


    }
    // console.log(fakeData10);
    return (
        <div>
            <h1>{products.length}</h1>
            {
                products.map(pd=> <Product handleCart={handleCart} product={pd}></Product>)
            }
            <div>
                <h1>Cart:{Cart.length}</h1>
            </div>
        </div>
        
    );
};

export default Shop;