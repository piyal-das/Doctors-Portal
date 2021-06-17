import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import LoginBg from "../../images/Group 140.png"
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [user, setUser] = useState(false)
    const [newUser, setNewUser] = useState(false)

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
  
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
 
    const handleChange = (e) => {
      let isFieldValid;
      if( e.target.name === 'name'){
        isFieldValid = e.target.value;
      }
      if (e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      }
      if(e.target.name === "password"){
          const passwordValid = e.target.value.length >= 6;
          isFieldValid = passwordValid;
      }
      if(isFieldValid) {
          const newUserInfo = {...user};
          newUserInfo[e.target.name] = e.target.value;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
      }
  }
  
    const handleGoogleSignIn = () => {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function (result) {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = { name: displayName, email, photoURL }
        setLoggedInUser(signedInUser);
        history.replace(from);
      }).catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    }

    const handleSubmit = (e) => {
      console.log(user.email, user.password)
        if(newUser && user.name && user.email && user.password){
          firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
          .then(res => {
            const newUserInfo = {...user};
            newUserInfo.error = '';
            newUserInfo.success = true;
            setUser(newUserInfo);
            history.replace(from);
          })
          .catch((error) => {
            const newUserInfo = {...user};
            newUserInfo.error= error.message
            newUserInfo.success = false;
            setUser(newUserInfo);
          });
        }
        
        if(!newUser && user.email && user.password){
          firebase.auth().signInWithEmailAndPassword(user.email, user.password)
              .then(res => {
                const newUserInfo = {...user};
                  newUserInfo.error = '';
                  newUserInfo.success = true;
                  setUser(newUserInfo);
                  history.replace(from);
              })
              .catch((error) => {
                const newUserInfo = {...user};
                newUserInfo.error= error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
              });
        }

        console.log('submitting')
        e.preventDefault();
    }

    return (
        <div className="login-page container">
        <div className="row align-items-center" style={{ height: "100vh" }}>
          <div className="col-md-6 shadow rounded p-5">
           
          <input type="checkbox" name= "newUser" onChange={()=>setNewUser(!newUser)}/> 
          <label htmlFor="newUser" className="text-success"> Click For New User Registration</label>
           <form onSubmit={handleSubmit}>
                {newUser && 
                    <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input type="text" name= "name" onBlur={handleChange} className="form-control" />
                  </div>
                }
              <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input type="text" name= "email" onBlur={handleChange} className="form-control" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="">Password</label>
                  <input type="password" name="password" onBlur={handleChange} className="form-control" />
                </div>
                {user.success && <p className="text-success">User {newUser ? 'Created' : 'Logged In'} Successfully </p>}
                <div className="form-group">
                  <label htmlFor="" className="text-danger"><small>Forgot your password?</small></label>
                </div>
                
                <div className="from-group ">
                  <input className='header-button mb-3' type="submit" value={newUser ? 'Sign Up' : 'Login'} />
                </div>
           </form>
                     <small className="text-danger"> {user.error}</small>          
            <p>Or</p>
            <div className="from-group ">
              <button className="header-button" onClick={handleGoogleSignIn}>Google Sign in</button>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block align-self-end">
            <img className="img-fluid" src={LoginBg} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Login;