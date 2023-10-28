import React from 'react';
import './Pages.css'


function Page1({ selectedOption, handleOptionChange, cardNumber, handleCardNumberChange, handlePage1Submit,cardNumberValidationMessage,reasonValidationMessage }) {
  const handleOptionSelect = (e) => {
    handleOptionChange(e.target.value);
  };

  const handleCardNumberInput = (e) => {
    const value = e.target.value.replace(/[^0-9]/g,'');
    handleCardNumberChange(value);
    
     
  };


  return (
    < div className='img'>
      <h3>Online card Replacement</h3>
      
      <form >
        <label htmlFor="cardNumber">Card Number : </label>
        <input type="text" id="cardNumber" name="cardNumber" onChange={handleCardNumberInput} value={cardNumber}  maxLength={16}/><br />
        <div style={{ color: 'red' }}>{cardNumberValidationMessage}</div>

        <label htmlFor="option">Reason:</label>
        <select id="option" name="option" onChange={handleOptionSelect} value={selectedOption}>
            <option value="lost" selected>Lost</option>
            <option value="damaged">Damaged</option>
            <option value="stolen">Stolen</option>
        </select>
        <div style={{ color: 'red' }}>{reasonValidationMessage}</div>
         <br />
      </form>

      <div className="page">
      <button onClick={handlePage1Submit}>Submit</button>

      </div>
     

      
    </div>
  );
}

export default Page1;

