import React from 'react';
import { Typography,Button, Card, CardContent, CardMedia, Grid } from '@mui/material';

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
                <Typography gutterBottom variant="h3" component="div">
                    {props.meal.strMeal}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    <p>{props.meal.strInstructions.slice(0,100)}</p>
                </Typography>
                </CardContent>
                <Button color="primary">see details</Button>
            </Card>
        </Grid>
            
        
    );
};

export default Meal;