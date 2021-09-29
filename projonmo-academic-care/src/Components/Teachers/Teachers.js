import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Teacher from '../Teacher/Teacher';
import './Teachers.css'

const Teachers = () => {
    // useState for handling teachers data 
    const [teachers, setTeachers] = useState([]);
    // useState form handling cart item data.
    const [cart, setCart] = useState([]);

    // fetching all data.
    useEffect(() => {
        fetch('./teachers-data.JSON')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])

    // handle add to cart item.
    const handleAddToCart = (teacher) => {
        // set property if card is selected.
        teacher.isSelected = true;
        const newCart = [...cart, teacher];
        setCart(newCart);
    }
    return (
        <div className="bg-body">
            <div className="custom-container">
                <div className="row my-5">
                    <div className="col-md-9">
                    <div className="row">
    
                    {
                        teachers.map(teacher => <Teacher
                            key={teacher.id} // passing key value for ignoring react warning
                            teacher={teacher} // pass teacher data
                            handleAddToCart = {handleAddToCart} // handle add to cart function.
                        ></Teacher>)
                    }
                    </div>
                    </div>
                
                    <div className="col-md-3">
                        <Cart cart={cart}></Cart>                  
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Teachers;