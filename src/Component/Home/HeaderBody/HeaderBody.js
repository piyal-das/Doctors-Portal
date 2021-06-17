import React from 'react';
import './HeaderBody.css'
import chair from '../../../images/chair.png'
import { Link } from 'react-router-dom';

const HeaderBody = () => {
    return (
        <div className="row mt-5">
            <div className="col-md-4 offset-md-1 mt-5">
                <h1 className='mb-2 fw-bold text-success'>Your New Smile <br/> Starts Here</h1>
                <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Unde voluptatibus temporibus, minima laboriosam <br/> ducimus earum voluptatibus temporibus.</small></p>
                <Link to='/appointment'><button className='header-button mt-4'>GET APPOINTMENT</button></Link>
            </div>
            <div className="col-md-6 mt-5">
                <img className="img-fluid" src={chair} alt="" />
            </div>
        </div>
    );
};

export default HeaderBody;