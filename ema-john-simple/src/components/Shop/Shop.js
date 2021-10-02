import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb } from '../../utilities/fakedb';
import './Shop.css';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';

const Shop = () => {
    // First time products load from fakedb
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);
    // products to be rendered on the UI
    const [displayProducts, setDisplayProducts] = useState([]);

    // displaying products
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data); // update products state.
                setDisplayProducts(data);
            });
    }, []);


    // handle add to cart function. When a product is added to the cart.
    const handleAddToCart = (product) => {
        // find the product that was selected is exist or not into the cart.
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            // filtering others products that was already in the cart.
            const rest = cart.filter(pd => pd.key !== product.key);
            // set selected products quantity to property and Increase it.
            exists.quantity = exists.quantity + 1;
            // set newCart
            newCart = [...rest, product];
        }
        // if new product is selected for the first time.
        else {
            // set quantity property for that product and set the value 1.
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key);

    }

    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
    }

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search Product" />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        >
                        </Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className="btn-regular">Review Your Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;