import React, { useEffect, useState } from 'react';
import { AppBar, Typography, Toolbar, IconButton, Button, TextField, Grid } from '@mui/material';
import Meal from '../Meal/Meal';

const Restaurant = () => {

    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);
    useEffect(() =>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [searchText])
    const handleSearchField = e => {
        const searchText = e.target.value;
        setSearchText(searchText)
    }
    return (
        <>
            <Typography sx={{margin: 'auto'}}><h1>Welcome to My Restaurant</h1></Typography>

            <TextField onChange={handleSearchField} id="outlined-basic" label="search food" variant="outlined" sx={{width: 500}} />
            <Grid container  spacing={5} sx={{padding: 8}}>
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </Grid>
        </>
    );
};

export default Restaurant;