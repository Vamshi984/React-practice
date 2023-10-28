import React from 'react';

function Page3({ handleNavigateToPage4, setSelectedDigitalWallet, handleNavigateToPage2, handlePage3Submit }) {

  const handleDigitalWalletSelect = (e) => {
    setSelectedDigitalWallet(e.target.value);
  };

  return (
    <div >
      <h3>Digital Wallet</h3>
      <label>Select a payment method</label>
      <div className="pay">
        <div>
            <input type="checkbox" id="googlePay" name="digitalWallet" value="Google Pay" onChange={handleDigitalWalletSelect} />
            <label htmlFor="googlePay">Google Pay</label>
        </div>
        <div>
            <input type="checkbox" id="phonePay" name="digitalWallet" value="Phone Pay" onChange={handleDigitalWalletSelect} />
            <label htmlFor="phonePay">Phone Pay</label>
        </div>
        <div>
            <input type="checkbox" id="samsungPay" name="digitalWallet" value="Samsung Pay" onChange={handleDigitalWalletSelect} />
            <label htmlFor="samsungPay">Samsung Pay</label>
        </div>
      </div>
      <div className="page">
      <button onClick={handlePage3Submit}>Continue</button>
      <button onClick={handleNavigateToPage2}>Cancel</button>
      </div>
    </div>
  );
}

export default Page3;
