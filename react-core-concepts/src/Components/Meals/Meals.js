import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css'
const Meals = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a';
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [])

    return (
        <div>
            <div className="container my-5">
            <div className="row">
                <div className="col-lg-9">
                    <div className="row">
                        {
                        meals.map(meal => <Meal 
                        key={meal.idMeal}
                        meal={meal}
                        ></Meal>)
                    }
                    </div>
                </div>
            <div className='col-lg-3'>

            </div>
            </div>
            
            </div>
        </div>
    );
};

export default Meals;