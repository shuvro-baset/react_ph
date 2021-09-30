import React from 'react';
import { Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';

const Meal = (props) => {
    console.log(props)
    return (
        
        <Grid sx={{marginTop:5}} item md={4} xs={12} sm={6}>
            <Card>
                    <CardMedia
                    component="img"
                    height="240"
                    image={props.meal.strMealThumb}
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.meal.strMeal}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.meal.strInstructions.slice(0,100)}
                    </Typography>
                    </CardContent>
            </Card>
        </Grid>
            
        
    );
};

export default Meal;