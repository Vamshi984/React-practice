import React from 'react';

function Page4({ cardNumber, reason, handleNavigateToPage1, handlePage4Submit, digitalWalletReplaced,selectedDigitalWallet }) {
  return (
    <div>
      <h3>Verify</h3>
      <p>Card Number : {cardNumber}</p>
      <p>Reason : {reason}</p>
      

      {digitalWalletReplaced && selectedDigitalWallet &&(
        <p>Digital Wallet : {selectedDigitalWallet}</p>
      )}
      
      <div className="page">
        <button onClick={handlePage4Submit}>Submit</button>
        <button onClick={handleNavigateToPage1}>Back</button>
      </div>
    </div>
  );
}

export default Page4;
