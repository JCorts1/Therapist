import React, { useState } from 'react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"


import '../App.css'

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [clientName, setClientName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const therapistEmail = 'your-therapist-email@example.com'; // Change this!
    const subject = `Appointment Request from ${clientName}`;
    const body = `
      Name: ${clientName}
      Email: ${clientEmail}
      Requested Date: ${selectedDate.toLocaleString()}
      Message: ${message}
    `;
    const mailtoLink = `mailto:${therapistEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  // We wrap everything in your 'layout-content' class
  // And use your header/text styles for consistency
  return (
    <div className='layout-content'>
      {/* We can add a container for the form content to give it structure */}
      <div className='appointment-container'>
        <h1 className='home-header'>Reserva una Cita</h1>
        <p className='home-text' style={{ marginBottom: '2rem' }}>
          Selecciona una fecha y envíame un mensaje. Esto abrirá tu cliente de correo para completar la solicitud.
        </p>

        <form onSubmit={handleSubmit} className="appointment-form">
          <div className="form-group">
            <label htmlFor="name">Tu Nombre</label>
            <input
              type="text"
              id="name"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Tu Email</label>
            <input
              type="email"
              id="email"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="date-picker">Fecha de Preferencia</label>
            {/* The DatePicker will need some specific styling */}
            <DatePicker
              id="date-picker"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
              minDate={new Date()}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Tu Mensaje</label>
            <textarea
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          {/* Reusing your primary-button style! */}
          <button type="submit" className='primary-button' style={{ width: '100%', marginTop: '1rem' }}>
            PREPARAR EMAIL DE CITA
          </button>
        </form>
      </div>
    </div>
  )
}

export default Appointments
