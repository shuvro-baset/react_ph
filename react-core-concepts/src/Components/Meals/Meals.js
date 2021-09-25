import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css'
const Meals = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        let url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMeals(data)
            });
    }, [])
    return (
        <div className='container my-5'>
            {
                
                meals.map(meal => <Meal 
                key={meal.idMeal}
                ></Meal>)
                }
        </div>
    );
};

export default Meals;