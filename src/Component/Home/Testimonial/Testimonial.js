import React from 'react';
import winson1 from '../../../images/Ellipse 1.png';
import winson2 from '../../../images/Ellipse 2.png';
import winson3 from '../../../images/Ellipse 3.png';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';
import './Testimonial.css'


const Testimonial = () => {
    const detail = [
        {
            
            name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout , The point of using Lorem a more-or-less normal distribute to using Content here, content',
            from: 'California',
            img: winson1
        },
        {
            
            name: 'Christofer Eubanks',
            description: 'It is a long established fact that by the readable content of a lot layout , The point of using Lorem a more-or-less normal distribute to using Content here, content',
            from: 'NewYork',
            img: winson2
        },
        {
            
            name: 'Naomi osaka',
            description: 'It is a long established fact that by the readable content of a lot layout , The point of using Lorem a more-or-less normal distribute to using Content here, content',
            from: 'Pencilvania',
            img: winson3
        },
    ]
    return (
        <div className="testimonials my-5 py-5 mt-5 mb-5">
            <div className="container ">
                    <div className="section-header">
                        <h5 className="text-brand">TESTIMONIAL</h5>
                        <h2 className='font-weight-bold'>What's Our Patients <br/> Says</h2>
                    </div>
                <div className="card-deck mt-5">
                    {
                        detail.map(testimonial => 
                        <TestimonialDetails key={testimonial.name} testimonial={testimonial}></TestimonialDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;