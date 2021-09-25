import React from 'react';

const Meal = (props) => {
    const {strMeal, strCategory, strMealThumb} = props.meal;
    return (
        <div className='col-lg-3 card shadow m-2 p-2'>
            <img className='img-fluid' src={strMealThumb} alt="" />

           <div className="card-boyd">
            <h3>strMeal: {strMeal}</h3>
            <h4>strCategory: {strCategory}</h4>
            <button className='btn btn-info'>Add To Cart</button>
           </div>
        </div>
    );
};

export default Meal;