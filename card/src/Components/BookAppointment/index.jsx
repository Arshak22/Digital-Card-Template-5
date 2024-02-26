import React, { useState } from 'react';
import './style.css';

export default function BookAppointment() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = () => {
    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      email.trim() === '' ||
      phone.trim() === '' ||
      date.trim() === '' ||
      time.trim() === ''
    ) {
      setError('Please fill in all the input fields');
      return;
    } else {
      setError('');
    }
    const appointment = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      date: date,
      time: time,
    };
    console.log(appointment);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setDate('');
    setTime('');
    setSuccess('You successfuly booked an appointment');
  };

  return (
    <div className='Appointment'>
      <h1 className='headline'>Book an Appointment</h1>
      <div className='appointment-form'>
        <div>
          <input
            type='text'
            name='first-name'
            id='first-name'
            placeholder='First Name'
            className='inpt-l'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type='text'
            name='last-name'
            id='last-name'
            placeholder='Last Name'
            className='inpt-r'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            className='inpt-l'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='tel'
            name='tel'
            id='tel'
            placeholder='Phone'
            className='inpt-r'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <input
            type='date'
            name='date'
            id='date'
            placeholder='Date'
            className='inpt-l'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type='time'
            name='time'
            id='time'
            placeholder='Time'
            className='inpt-r'
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>
      <div className='send-button'>
        <button onClick={handleSubmit}>Send</button>
      </div>
      <h2 className={error ? 'error' : 'success'}>{error ? error : success}</h2>
    </div>
  );
}
