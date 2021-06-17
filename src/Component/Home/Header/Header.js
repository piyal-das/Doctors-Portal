import React from 'react';
import HeaderBody from '../HeaderBody/HeaderBody';
import Navbar from '../../Shared/Navbar/Navbar';
import Visit from '../Visit/Visit';
import './Header.css'
import Service from '../Service/Service';
import DentalCare from '../DentalCare/DentalCare';
import Appointment from '../Appointment/Appointment';
import Testimonial from '../Testimonial/Testimonial';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import Doctors from '../Doctors/Doctors';


const Header = () => {
    return (
        <div className="header-container">
            <Navbar/>
            <HeaderBody/>
            <Visit/>
            <Service/>
            <DentalCare/>
            <Appointment/>
            <Testimonial/>
            <Blogs/>
            <Doctors/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Header;