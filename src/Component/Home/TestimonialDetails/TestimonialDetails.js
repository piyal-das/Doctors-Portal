import React from 'react';
import './TestimonialDetails.css'


const TestimonialDetails = (props) => {
    const {name, img, description, from} = props.testimonial;
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <p className="card-text text-center">{description}</p>
            </div>
            <div className="card-footer d-flex  align-items-center ml-5 mt-5">
                <img className="mx-3" src={img} alt="" width="60"/>
                <div >
                    <h6 className="text-brand">{name}</h6>
                    <small className="m-0 text-secondary">{from}</small>
                </div>
            </div>
       </div>
    );
};

export default TestimonialDetails;