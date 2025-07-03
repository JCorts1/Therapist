import React, { useState } from 'react';
import '../App.css';

const Appointments = () => {
  // The state for the date input. It's initialized as an empty string.
  const [selectedDate, setSelectedDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [message, setMessage] = useState('');

  // This function handles the form submission
  const handleSubmit = (event) => {
    // Prevents the default form submission behavior (page reload)
    event.preventDefault();

    // IMPORTANT: Replace this with the psychologist's actual email address
    const therapistEmail = 'your-therapist-email@example.com';
    const subject = `Appointment Request from ${clientName}`;

    // The native date input returns a string; we convert it to a Date object
    // for formatting. If no date was selected, we provide a fallback string.
    const formattedDate = selectedDate ? new Date(selectedDate).toLocaleString('es-ES') : 'No date selected';

    // This creates the email body with all the form data
    const body = `
      Name: ${clientName}
      Email: ${clientEmail}
      Requested Date: ${formattedDate}
      Message: ${message}
    `;

    // This constructs the mailto link, encoding the subject and body to handle special characters
    const mailtoLink = `mailto:${therapistEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // This opens the user's default email client
    window.location.href = mailtoLink;
  };

  // This helper function gets the current date and time in the format required
  // by the <input type="datetime-local"> min attribute (YYYY-MM-DDTHH:MM).
  // This prevents users from selecting a past date or time.
  const getMinDateTime = () => {
    const today = new Date();
    // We need to adjust for the local timezone offset to get the correct local time
    const timezoneOffset = today.getTimezoneOffset() * 60000; // in milliseconds
    const localISOTime = new Date(today - timezoneOffset).toISOString().slice(0, 16);
    return localISOTime;
  };

  // The JSX that renders the component
  return (
    <div className='layout-content'>
      <div className='appointment-container'>
        <h1 className='home-header'>Reserva una Cita</h1>
        <p className='home-text' style={{ marginBottom: '2rem' }}>
          Selecciona una fecha y envíame un mensaje. Esto abrirá tu cliente de correo para completar la solicitud.
        </p>

        {/* The form element with the onSubmit handler */}
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
            <label htmlFor="date-picker">Fecha y Hora de Preferencia</label>
            {/* This is the native HTML5 datetime input. It replaces react-datepicker. */}
            <input
              type="datetime-local"
              id="date-picker"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={getMinDateTime()} // Sets the minimum selectable date to now
              required
              // It's better to move this styling to your App.css file
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
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

          {/* The submit button for the form */}
          <button type="submit" className='primary-button' style={{ width: '100%', marginTop: '1rem' }}>
            PREPARAR EMAIL DE CITA
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointments;
