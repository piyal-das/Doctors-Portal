import React from 'react';
import chair from '../../../images/chair.png'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import './AppoinmentHeader.css'


const AppointmentHeader = ({handleDateChange}) => {

    
    return (
        <div className="row mt-5">
        <div className="col-md-4 offset-md-1 mt-5">
            <h1 className='mb-5 ml-5 fw-bold text-success'>Appointment</h1>
            <div >
                <Calendar className='calender p-5 ml-5'
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
        </div>
        <div className="col-md-6 mt-5">
            <img className="img-fluid" src={chair} alt="" />
        </div>
    </div>
    );
};

export default AppointmentHeader;