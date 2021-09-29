import React from 'react';
import './Teacher.css'
const Teacher = (props) => {
    // destructuring props data
    const {name, designation, subject, salary, img, number_of_lecture_per_month} = props.teacher;
    
    return (
        // teachers card
        <div className="col-md-4">
            <div className="card shadow my-3 p-3 rounded">
                <div className="d-flex justify-content-center my-3">
                    <img src={img} className="img-fluid teacher-img" alt="" />
                </div>
                <p>  <b>Name:</b> {name}</p>
                <p>  <b>Designation:</b> {designation} </p>
                <p>  <b>Subject:</b> {subject}</p>
                <p>  <b>Lecture Number:</b> {number_of_lecture_per_month}</p>
                <p>  <b>Salary:</b> <small className='fw-bolder'><span className='fw-bolder'>&#2547;</span> {salary}</small> </p>
               
               {
                   // handling button click. if clicked then disabled button.
                   (props.teacher.isSelected ? <button className="btn btn-light disabled py-2">Selected </button>
                   : <button className="btn btn-dark fw-bolder py-2" onClick={() => props.handleAddToCart(props.teacher)}>Select Teacher <i className="fas fa-user-plus"></i></button>
                   )
               }
            </div>
        </div>
    );
};

export default Teacher;