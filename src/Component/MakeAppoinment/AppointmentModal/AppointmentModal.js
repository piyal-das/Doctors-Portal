import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    boxShadow             : "5px 5px 10px #2c2b3d"
  }
};
Modal.setAppElement('#root')

const AppointmentModal = ({openModal, closeModal, modalIsOpen ,appointmentOn, date}) => {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data =>{
    data.appointmentOn = appointmentOn; 
    data.date = date;
    data.created = new Date();

     fetch('http://localhost:5000/addAppointment', {
       method : 'POST',
       headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
       body : JSON.stringify(data)
     })
     .then(res => res.json())
     .then(success =>{
       if(success){
        alert("appointment submit successfully")
        closeModal()
       }
     })
    };
    return (
        <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 className='text-brand text-center'>{appointmentOn}</h2>
          <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
          
                  <form  onSubmit={handleSubmit(onSubmit) }>
                        <input className='form-control' {...register("FullName", { required: true, minLength: 3 })} placeholder="Your name" />
                        <small><span className='text-danger fs-0'>{errors.FullName?.type === 'required' && "*Fullname is required"}</span></small><br/>

                        <input className='form-control' {...register("Email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} placeholder="Email" />
                        <small><span className='text-danger'>{errors.Email?.type === 'required' && "*Email is required"}</span></small><br/>

                        <input className='form-control' type="number" {...register("Phone", { required: true, maxLength: 15, minLength: 11 })} placeholder="Phone Number" />
                        <small><span className='text-danger'>{errors.Phone?.type === 'required' && "*Phone number is required"}</span></small><br/>
                    
                        <div className="form-row">
                          <div className="form-group col-md-6">
                          <input className='form-control' type="number" {...register("age", { min: 18, max: 110 })} placeholder="Age" />
                          </div>
                          <div className ="form-group col-md-6">
                          <input className='form-control ' {...register("weight", { min: 30, max: 200 })} placeholder="Weight" />
                          </div>
                        </div>
                        <div className="text-right">
                        <input className="header-button" type="submit" />
                        </div>
                      </form>
        </Modal>
        </div>
    );
};

export default AppointmentModal;