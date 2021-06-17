import React from 'react';
import fluoride from '../../../images/001-dental.png'
import cavity from '../../../images/tooth (1).png'
import teeth from '../../../images/tooth.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Service = () => {
    const serviceDetail = [
        {
            id: '1',
            img: fluoride,
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing  elit. Quam commodi facilis ullam saepe Repudiandae'
        },
        {
            id: '2',
            img: cavity,
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam commodi facilis ullam saepe Repudiandae'
        },
        {
            id: '3',
            img: teeth,
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam commodi facilis ullam saepe Repudiandae'
        },
    ]
    return (
        <section className = "pt-5">
            <div className = 'text-center'>
                <h6 className="text-brand">OUR SERVICES</h6>
                <h2 className='font-weight-bold'>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center ">
            <div className="row w-75 mt-5 pt-5">
                {
                    serviceDetail.map(cavity => <ServiceDetail key={cavity.id} cavity={cavity}></ServiceDetail>)
                }
            </div>
            </div>
        </section>
    );
};

export default Service;