import React, { useContext, useEffect, useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { userContext } from '../../../App';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() =>{
        
        fetch('http://localhost:5000/appointmentByDate', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            body: JSON.stringify({date: selectedDate, 
                email: loggedInUser.email})
        })
        .then(res=>res.json())
        .then(data => setAppointments(data))
    },[selectedDate])

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2 col-sm-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 d-flex justify-content-center">
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
                </div>
                <div className="col-md-5">
                    <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;