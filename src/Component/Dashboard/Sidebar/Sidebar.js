import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faGripHorizontal,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
// import { useContext } from 'react';
// import { userContext } from '../../../App';

const Sidebar = () => {
  // if you want to show conditional rendering............

  // const [loggedInUser, setLoggedInUser] = useContext(userContext)
  // const [isDoctor, setIsDoctor] = useState(false)

  //     useEffect(() => {
  //         fetch('https://mighty-brushlands-32636.herokuapp.com/isDoctor',{
  //             method: 'POST',
  //             headers: {
  //                 'Content-type': 'application/json; charset=UTF-8',
  //               },
  //             body: JSON.stringify({email: loggedInUser.email})
  //         })
  //         .then(res => res.json())
  //         .then(data => setIsDoctor(data))
  //     }, [])

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <div className="">
        <ul className="list-unstyled">
          <li>
            <Link to="/dashboard/dashboard" className="text-white">
              <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
            </Link>
          </li>
          {/* {isDoctor &&  */}
          <div className="">
            <li>
              <Link to="/dashboard/appointment" className="text-white">
                <FontAwesomeIcon icon={faCalendar} />{" "}
                <span>AppointmentByDate</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/allPatients" className="text-white">
                <FontAwesomeIcon icon={faUsers} /> <span>AllPatients</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/addDoctor" className="text-white">
                <FontAwesomeIcon icon={faUsers} /> <span>Add Doctor</span>
              </Link>
            </li>
            <li>
              
              <Link to="/dashboard/allPatients" className="text-white">
                <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
              </Link>
            </li>
            <li>
              <Link to="/doctor/setting" className="text-white">
                <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
              </Link>
            </li>
          </div>
          {/* } */}
        </ul>
      </div>
      <div>
        <Link to="/" className="text-white">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
