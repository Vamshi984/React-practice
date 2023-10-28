import './Pages.css'
import React, { useState } from 'react';

function Page2({ selectedOption, cardNumber, handlePage2Submit, handleNavigateToPage3, handleNavigateToPage1,handleNavigateToPage4 }) {
  const [digitalWalletReplaced, setDigitalWalletReplaced] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedOption, setEditedOption] = useState(selectedOption);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedOption(selectedOption);
    handleNavigateToPage1();
  };

  const handleSave = () => {
    setIsEditing(false);
    selectedOption = editedOption;
  };

  const handleCheckboxChange = () => {
    setDigitalWalletReplaced(!digitalWalletReplaced);
  };

   handlePage2Submit = () => {
    if (digitalWalletReplaced) {
      handleNavigateToPage3();
    } else {
      handleNavigateToPage4();
    }
  };

  return (
    <div>
      <h3>Confirm</h3>
      <p>Card Number: {cardNumber}</p>
      <p>Reason : {isEditing ? <input value={editedOption} onChange={(e) => setEditedOption(e.target.value)} /> : selectedOption}</p>


      

      <label htmlFor="digitalWalletReplacement">Replace digital wallet </label>
      <input
        type="checkbox"
        id="digitalWalletReplacement"
        name="digitalWalletReplacement"
        checked={digitalWalletReplaced}
        onChange={handleCheckboxChange}
      />

      <br />

      <div className="page">
        <button onClick={handlePage2Submit}>Submit</button>
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
      </div>
    </div>
  );
}

export default Page2;
