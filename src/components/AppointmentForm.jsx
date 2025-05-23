import React from 'react'
import './CSS/AppointmentForm.css'
import { FaCalendarAlt, FaClock, FaPhone, FaUser} from 'react-icons/fa'

const AppointmentForm = () => {
  return (
    <form className='appointment-form' onSubmit={(e)=>e.preventDefault()}>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <div className="input-wrapper">
                <FaUser className='icon' />
                <input type="text" name='name' id='name' placeholder='Your name' />
            </div>
        </div>

        <div className="form-group">
            <label htmlFor="phone">Phone number</label>
            <div className="input-wrapper">
                <FaPhone className='icon' />
                <input type="tel" name='phone' id='phone' placeholder='Your phone' />
            </div>
        </div>

        <div className="form-group">
            <label htmlFor="date">Date</label>
            <div className="input-wrapper">
                <FaCalendarAlt className='icon' />
                <input type="date" name='date' id='date' />
            </div>
        </div>

        <div className="form-group">
            <label htmlFor="time">Time</label>
            <div className="input-wrapper">
                <FaClock className='icon' />
                <input type="time" name='time' id='time' />
            </div>
        </div>

        <div className="form-group">
            <button>Make an appointment</button>
        </div>
    </form>
  )
}

export default AppointmentForm