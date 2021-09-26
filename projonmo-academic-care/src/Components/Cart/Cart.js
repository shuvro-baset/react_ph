import React from 'react';
import './Cart.css'
const Cart = (props) => {

    // initialize total salary amount and set it to 0
    let totalSalary = 0;
    // calculate total salary
    for (const single_cart of props.cart){
        totalSalary = totalSalary + single_cart.salary;
    } 
    return (
        <div className='card p-2 my-3 shadow border-0'>
            <h6 className="text-center fw-bolder">Teachers Salary Cart <i className="fas fa-cart-arrow-down"></i></h6>
            <hr className='fw-bolder' />
            <p> <b>Number of Selected Teachers:</b> {props.cart.length}</p>
            <p> <b>Total Salary:</b> <small className='fw-bolder'><span className='fw-bolder'>&#2547;</span> {totalSalary}</small> </p>
            {
                props.cart.map((single_cart_data, i) => 
                
                    <div  key={i} className='d-flex align-items-center justify-content-between my-2 border border-info rounded p-2'>
                        <h6 className='fw-bolder'>{single_cart_data.name}</h6>
                        <img src={single_cart_data.img} className="img-fluid cart-img mx-2" alt="" />
                    </div>
            )}
            
        </div>
    );
};

export default Cart;