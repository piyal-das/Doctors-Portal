import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Business.css'


const Business = ({info}) => {
    return (
        <div className = 'col-md-4 text-white info-card'>
            <div className={`d-flex justify-content-center info-${info.background} info-container`}>
                <div  className="mr-5">
                     <FontAwesomeIcon className="info-icon" icon={info.icon}/>
                </div>
                <div className="">
                <h6>{info.name}</h6>
                <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default Business;