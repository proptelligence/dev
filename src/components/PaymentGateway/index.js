import React, { useState } from 'react';
import './index.css'; // Import the CSS file

const PaymentGateway = () => {
  const [showCardDetails, setShowCardDetails] = useState(true);

  const handlePaymentMethodSelection = (event) => {
    const selectedOption = event.target.value;
    setShowCardDetails(selectedOption === 'creditDebit');
  };

  return (
    <>
    <div className='payment-gate-cont'>
    <div className="payment-container">
      <h1 id='payment-heading'>Payment Gateway</h1>
      <p id='pay-des'>
        Securely make payments for legal services using our trusted payment gateway. Your transactions are encrypted and protected, ensuring confidentiality and peace of mind.
      </p>
      <div className="payment-form">
        <h2>Make a Payment</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="paymentMethod">Payment Method</label>
            <select id="paymentMethod" name="paymentMethod" onChange={handlePaymentMethodSelection}>
              <option value="creditDebit">Debit/Credit Card</option>
              <option value="digital">Digital Payments</option>
            </select>
          </div>
          {showCardDetails && (
            <div className="specific-payment-details">
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number:</label>
                <input type="text" id="cardNumber" name="cardNumber" placeholder="Enter card number" />
              </div>
              <div className="form-group">
                <label htmlFor="amount">Amount:</label>
                <input type="text" id="amount" name="amount" placeholder="Enter amount" />
              </div>
              <div className="form-group">
                <label htmlFor="expiry">Expiry Date:</label>
                <input type="text" id="expiry" name="expiry" placeholder="MM/YY" />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV:</label>
                <input type="text" id="cvv" name="cvv" placeholder="Enter CVV" />
              </div>
            </div>
          )}
          <button className="pay-button" type="submit">Pay Now</button>
        </form>
        {!showCardDetails && (
          <div className="digital-payment-button">
            {/* Button or options for digital payments like GPay, PhonePe */}
            {/* For example: */}
            <button className="digital-pay-now">Pay Using Digital Methods</button>
          </div>
        )}
      </div>
    </div>
    </div>
    </>
   
  );
};

export default PaymentGateway;
