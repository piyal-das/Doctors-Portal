import React from 'react';
import Business from '../Business/Business';
import { faClock, faPhoneVolume, faMapMarker } from '@fortawesome/free-solid-svg-icons'

const Visit = () => {
    const details =[
         {
             name: 'Opening Hours',
             description: 'We are open 7 days',
             background: 'primary',
             icon: faClock
         },
         {
            name: 'Visit our location',
            description: 'Brooklin, NY 10036, United States',
            background: 'secondary',
            icon: faMapMarker
        },
        {
            name: 'Contact us now',
            description: '+000123456789',
            background: 'primary',
            icon: faPhoneVolume
        },
    ]
    return (
        <section className = 'd-flex justify-content-center mt-5 rounded' style = {{borderRadius:'10px'}}>
            <div className="w-75 row " >
                    {
                    details.map(data =><Business key = {data.name} info={data}></Business>) 
                    }
            </div>
        </section>
    );
};

export default Visit;