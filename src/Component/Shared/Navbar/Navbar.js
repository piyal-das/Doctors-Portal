import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser] = useContext(userContext)
    const NavColor = {
        color: '#12d0d8'
    }
    return (


        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid justify-content-end">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav mt-3">
                            <li className="nav-item mr-4">
                                <Link style={NavColor} to="/home" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item mr-4 ">
                                <Link style={NavColor} to="/appointment" className="nav-link" >Appointment</Link>
                            </li>
                            <li className="nav-item mr-4 ">
                                <Link style={NavColor} to="/dashboard/appointment" className="nav-link " >Dashboard</Link>
                            </li>
                            <li className="nav-item mr-4">
                                <Link style={NavColor} to="/" className="nav-link">Contact</Link>
                            </li>
                            <li className="nav-item mr-4">
                                <Link style={NavColor} to="/login" className="nav-link rounded  header-button text-white">Login</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to='/'><img style={{height: '45px',borderRadius: '50%'}} src={loggedInUser.photoURL} alt="" /></Link>
                            </li>
                </ul>
                </div>
            </div>
       </nav>




    );
};

export default Navbar;