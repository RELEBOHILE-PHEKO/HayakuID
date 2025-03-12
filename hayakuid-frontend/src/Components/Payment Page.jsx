// src/components/PaymentMethods.js
import React, { useState } from 'react';
import PaymentForm from './PaymentForm'; // Include Stripe form
import EcoCashPayment from './EcoCashPayment'; // Integrate EcoCash API
import MpesaPayment from './MpesaPayment'; // Integrate M-Pesa API

const PaymentMethods = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div>
      <h3>Select Payment Method</h3>
      <label>
        <input
          type="radio"
          name="paymentMethod"
          value="card"
          checked={paymentMethod === 'card'}
          onChange={handleMethodChange}
        />
        Pay with Card (Stripe)
      </label>
      <label>
        <input
          type="radio"
          name="paymentMethod"
          value="ecocash"
          checked={paymentMethod === 'ecocash'}
          onChange={handleMethodChange}
        />
        Pay with EcoCash
      </label>
      <label>
        <input
          type="radio"
          name="paymentMethod"
          value="mpesa"
          checked={paymentMethod === 'mpesa'}
          onChange={handleMethodChange}
        />
        Pay with M-Pesa
      </label>

      {paymentMethod === 'card' && <PaymentForm />}
      {paymentMethod === 'ecocash' && <EcoCashPayment />}
      {paymentMethod === 'mpesa' && <MpesaPayment />}
    </div>
  );
};

export default PaymentMethods;
