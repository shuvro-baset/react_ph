import React from 'react';
import { Typography, Card, CardContent, CardMedia,CardActionArea } from '@mui/material';

const Meal = (props) => {
    console.log(props)
    return (
        <div>
            <Card sx={{ maxWidth: 345, m:5 }}>
                    <CardMedia
                    component="img"
                    height="140"
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
        </div>
    );
};

export default Meal;