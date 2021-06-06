import React, { useState } from 'react';
// import fake data from fakeData folder
import fakeData from '../../fakeData/index';


const shop = () => {
    console.log(fakeData);
    
    const first10 = fakeData.slice(0, 10);

    const [products, setProducts] = useState(first10)
    console.log(first10)

    return (
        <div>
            <h1>This is Shop</h1>
            <h3>{products.length}</h3>
            <ul>
                {
                    products.map(product => <li>{product.name}</li>)
                }
            </ul>
        </div>
    );
};

export default shop;