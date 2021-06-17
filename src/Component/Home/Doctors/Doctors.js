import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])

    useEffect( () => {
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <section className="doctors">
            <div className="container">
                <h4 className="text-center  text-primary mb-5">Our Doctors</h4>
                <div className="row">
                    {
                       doctors.map(dr =><Doctor key={dr._id} dr={dr} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;