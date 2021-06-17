import React from 'react';

const ServiceDetail = ({cavity}) => {
    return (
        <div className='col-md-4 text-center mb-5'>
            
                <img style={{ height: '50px'}} className="img-fluid" src={cavity.img} alt="" />
                <h6 className='mt-3 mb-3'>{cavity.name}</h6>
                <small className='text-secondary'>{cavity.description}</small>
            
        </div>
    );
};

export default ServiceDetail;