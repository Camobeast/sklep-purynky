import React from 'react';

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../calendar.css"
import '../App.css';

function Index() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>
      <h1 className='text-center'>Rezervace</h1>
      <div className='calendar-container'>
        <Calendar
          onChange={setDate}
          value={date}
          selectRange={true}
          minDate={new Date(2024, 1, 1)}
          nextLabel='měsíc>>'
          nextAriaLabel='Přejít na další měsíc'
          next2Label='rok>>'
          next2AriaLabel='Přejít na další rok'
          prevLabel='<<měsíc'
          prevAriaLabel='Přejít na předchozí měsíc'
          prev2Label='<<rok'
          prev2AriaLabel='Přejít na předchozí rok'
        />
      </div>
      {date.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>Příjezd:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>Odjezd:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'>Vybrané datum:</span>{' '}
          {date.toDateString()}
        </p>
      )}
    </div>
  );
}

export default Index;