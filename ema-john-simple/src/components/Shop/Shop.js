import React from 'react';
// import fake data from fakeData folder
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css';


const Shop = () => {
    console.log(fakeData);
    
    const first10 = fakeData.slice(0, 10);

    const [products, setProducts] = useState(first10)
    console.log(first10)

    return (
        <div className="shop-container">

            <div className="product-container">
            <h1>This is Shop</h1>
            <h3>{products.length}</h3>
            <ul>
                {
                    products.map(product => <li>{product.name}</li>)
                }
            </ul>
            </div>

            <div className="cart-container">
                <h3>This is cart</h3>
            </div>

            
        </div>
    );
};

export default Shop;