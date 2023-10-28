import React, { useState } from 'react';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import Page4 from './Components/Page4';
import './App.css'

function App() {
  const [selectedOption, setSelectedOption] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [showPage2, setShowPage2] = useState(false);
  const [showPage3, setShowPage3] = useState(false);
  const [showPage4, setShowPage4] = useState(false);
  const [selectedDigitalWallet, setSelectedDigitalWallet] = useState([]);
  const [cardNumberValidationMessage,setCardNumberValidationMessage]=useState('');
  const [reasonValidationMessage,setReasonValidationMessage]=useState('');


  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleCardNumberChange = (number) => {
    setCardNumber(number);
  };

  const handlePage1Submit = () => {
    const isValidCardNumber =cardNumber;
    const isSelectReason =selectedOption;
    if(selectedOption && cardNumber.length === 16){
      setShowPage2(true);
    }
    else if(cardNumber.length===0){
      setCardNumberValidationMessage('*please enter card number')
    }
    else if(cardNumber.length < 16){
      setCardNumberValidationMessage('*please enter valid card');
    }
    else if(isValidCardNumber){
      setCardNumberValidationMessage('')
      handleCardNumberChange(cardNumber);
    }
    if(selectedOption === ''){
      setReasonValidationMessage('*please select the reason ')
    }
    
    else if(isSelectReason){
      setReasonValidationMessage('');
    }
     
  };

  const handleNavigateToPage2 = () => {
    setShowPage2(true);
    setShowPage3(false); 
  };

  const handleNavigateToPage3 = () => {
    setShowPage3(true);
    setShowPage4(false);
  };

  const handlePage2Submit = () => {
    
  };

  const handleNavigateToPage4 = () => {
    setShowPage4(true);
    setShowPage2(false);
  };

  const handleNavigateToPage1 = () => {
    setShowPage4(false);
    setShowPage3(false);
    setShowPage2(false);
    setSelectedOption('');
    setCardNumber('');
    setSelectedDigitalWallet('');
  };

  const handlePage4Submit = () => {
  };
  const handlePage3Submit = () =>{
    if (selectedDigitalWallet) {
      setShowPage4(true);
      setShowPage2(false);
    }
    else if(!selectedDigitalWallet){
      setShowPage4(true);
      setShowPage2(false);
    }
  };

  return (
  <div className='body'>    
      <center >
      {!showPage2 && !showPage3 && !showPage4 && (
        <Page1
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
          cardNumber={cardNumber}
          handleCardNumberChange={handleCardNumberChange}
          handlePage1Submit={handlePage1Submit}
          handleNavigateToPage2={handleNavigateToPage2}
          cardNumberValidationMessage={cardNumberValidationMessage}
          setCardNumberValidationMessage={setCardNumberValidationMessage}
          reasonValidationMessage={reasonValidationMessage}
          setReasonValidationMessage={setReasonValidationMessage}
        />
      )}
      {showPage2 && !showPage3 && !showPage4 && (
        <Page2
          selectedOption={selectedOption}
          cardNumber={cardNumber}
          handlePage2Submit={handlePage2Submit}
          handleNavigateToPage1={() => setShowPage2(false)}
          handleNavigateToPage3={handleNavigateToPage3}
          handleNavigateToPage4={handleNavigateToPage4}
          setSelectedDigitalWallet={setSelectedDigitalWallet}
        />
      )}
      {showPage3 && !showPage4 && (
        <Page3
          handleNavigateToPage4={handleNavigateToPage4}
          setSelectedDigitalWallet={setSelectedDigitalWallet}
          handleNavigateToPage2={handleNavigateToPage2} 
          handlePage3Submit={handlePage3Submit}
        />
      )}
      {showPage4 && (
        <Page4
        cardNumber={cardNumber}
        reason={selectedOption}
        digitalWalletReplaced={showPage3}
        selectedDigitalWallet={selectedDigitalWallet}
        handleNavigateToPage1={handleNavigateToPage1}
        handlePage4Submit={handlePage4Submit}
        />
      )}
    </center>
  </div>
  );
}

export default App;
