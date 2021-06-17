import React from 'react';
import AppointmentModal from '../AppointmentModal/AppointmentModal';

const BookingCard = ({booking, date}) => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }
    return (
        <div className = 'col-md-4 mb-5 mt-5'>
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} Spaces available</p>
                    <button className="header-button" onClick={()=>setIsOpen(openModal)}>BOOK APPOINTMENT</button>
                    <AppointmentModal openModal={openModal} date={date} appointmentOn={booking.subject} closeModal={closeModal} modalIsOpen={modalIsOpen}></AppointmentModal>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;