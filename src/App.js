import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import MakeAppointment from './Component/MakeAppoinment/MakeAppointment/MakeAppointment';
import Login from './Component/Login/Login';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import AllPatients from './Component/AllPatients/AllPatients/AllPatients';
import DoctorDashboard from './Component/Dashboard/DoctorDashboard/DoctorDashboard';
import { createContext, useState } from 'react';
import AddDoctor from './Component/AddDoctor/AddDoctor';
import PrivateRoute from './Component/Login/PrivateRoute';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignIn: false,
    name: '',
    email: '',
    error: '',
    success: '',
  });
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>

        <Route  path="/home">
            <Home/>
        </Route>

        <Route path="/appointment">
          <MakeAppointment/>
        </Route>

        <PrivateRoute path="/dashboard/appointment">
           <Dashboard/>
        </PrivateRoute>

        <Route path="/dashboard/dashboard">
            
            <DoctorDashboard/>
        </Route>

        <Route path="/dashboard/allPatients">
            <AllPatients/>
          </Route>

        <Route path='/dashboard/addDoctor'>
          <AddDoctor/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>
        
      </Switch>  
    </Router>
    </userContext.Provider>
  );
}

export default App;
