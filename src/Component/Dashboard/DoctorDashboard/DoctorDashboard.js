import React, { useEffect, useState } from 'react';
import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';
import Sidebar from '../Sidebar/Sidebar';

const DoctorDashboard = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('https://mighty-brushlands-32636.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    return (
        <div className="container-fluid row" >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-3 pr-5" style={{ position: "absolute", right: 0, }}>
                <h5 className="fw-bold mb-5 ml-3 mt-5">Dashboard</h5>
              <div className="d-flex mb-5">
                  <div className="col-md-3 ">
                  <div className="bg-danger align-items-center d-flex justify-content-center rounded shadow text-white p-3">
                            <div className="w-25"><h1>09</h1></div>
                            <div className="w-25"><p>Pending <br/> Appointments</p></div>
                        </div>
                  </div>
                  <div className="col-md-3">
                  <div className="bg-success align-items-center d-flex justify-content-center rounded shadow text-white p-3">
                            <div className="w-25"><h1>19</h1></div>
                            <div className="w-25"><p>Todays <br/> Appointments</p></div>
                        </div>
                  </div>
                  <div className="col-md-3">
                        <div className="bg-info  align-items-center d-flex justify-content-center rounded  shadow text-white p-3">
                             <div className="w-25"><h1>34</h1></div>
                               <div className="w-25"><p>Total <br/> Appointments</p></div>
                            </div>
                  </div>
                  
                  <div className="col-md-3">
                    <div className="bg-warning align-items-center d-flex justify-content-center rounded shadow text-white p-3">
                            <div className="w-25"><h1>78</h1></div>
                            <div className="w-25"><p>Total <br/> Patients</p></div>
                        </div>
                  </div>
              </div>
                
                <div className="shadow rounded ml-3 p-3">
                    <h4 className="fw-bold ml-2">Recent Appointments</h4>
                    <AppointmentDataTable appointments={appointments}></AppointmentDataTable>
                </div>
            </div>
        </div>
    );
};

export default DoctorDashboard;