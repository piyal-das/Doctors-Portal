import React from 'react';
import doctorImage from '../../../images/5790-removebg.png'
import './Appointment.css'
import { Link } from 'react-router-dom'

const Appointment = () => {
    return (
       
        <section className="make-appointment ">
        <div className="container">
            <div className="row col-12">
                <div className="col-md-5 col-sm-6">
                    <img className="img-fluid" src={doctorImage} alt=""/>
                </div>
                <div className="col-md-7 col-sm-6 text-white py-5">
                    <h5 className='text-brand'>APPOINTMENT</h5>
                    <h1 className="my-4 text-white">Make an Appointment <br/> Today</h1>
                    <p className="my-4 text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                    <Link to={'/appointment'}>
                    <button className="header-button mt-5">Learn More</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    </section>  
        
    );
};

export default Appointment;