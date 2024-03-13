import React, { useState } from 'react';
import './index.css'; // Import the CSS file

const PaymentGateway = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditDebit');
  const [showUPIDetails, setShowUPIDetails] = useState(false);

  const handlePaymentMethodSelection = (event) => {
    const selectedOption = event.target.value;
    setPaymentMethod(selectedOption);
    setShowUPIDetails(false); // Reset the UPI details when changing the payment method
  };

  const handlePayNowWithUPI = () => {
    // Add logic here to fetch or generate the QR code and UPI image
    // For example:
    // const upiQRCode = generateUPIQRCode();
    // const upiImage = fetchUPIImage();
    setShowUPIDetails(true);
  };

  return (
    <>
      <div className='payment-gate-cont'>
        <div className="payment-container">
          <h1 id='payment-heading'>Payment Gateway</h1>
          <div className="payment-form">
            <h2>Make a Payment</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="paymentMethod">Payment Method</label>
                <select id="paymentMethod" name="paymentMethod" onChange={handlePaymentMethodSelection} value={paymentMethod}>
                  <option value="creditDebit">Debit/Credit Card</option>
                  <option value="digital">Pay Using UPI</option>
                </select>
              </div>
              {paymentMethod === 'creditDebit' && (
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
                  <button className="pay-button" type="submit">Pay Now</button>
                </div>
              )}
              {paymentMethod === 'digital' && (
                <>
                  {showUPIDetails ? (
                    <div className="upi-payment-details">
                      {/* Display QR code and UPI image */}
                      {/* Replace these placeholders with actual sources */}
                      <img className='qr-img' src="https://res.cloudinary.com/ajaymedidhi7/image/upload/v1706788804/proptelligencesbi_page-0001_fsnlrn.jpg" alt="UPI Image" />
                     
                    </div>
                  ) : (
                    <div className="digital-payment-button">
                      {/* Button or options for digital payments like GPay, PhonePe */}
                      {/* For example: */}
                      <button className="digital-pay-now" onClick={handlePayNowWithUPI}>
                        Pay Now with UPI
                      </button>
                    </div>
                  )}
                </>
              )}
             
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentGateway;
