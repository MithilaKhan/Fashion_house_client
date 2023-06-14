import React from 'react';

const PaymentHistoryCard = ({ payment }) => {
  const { email, id, price, date, status, transactionId } = payment;
  return (
    <div className="card w-full md:w[540px] lg:w-[540px] mb-5 bg-pink-100 mx-auto text-black">
      <div className="card-body">
        <h2 className="card-title">Email:{email}</h2>
        <p>Product ID: {id} </p>
        <p > Transaction ID: {transactionId} </p>
        <p>Date: {date} </p>
        <div>
          <p> Price: {price} </p>
          <p> status: {status} </p>
        </div>
      </div>
    </div>

  );
};

export default PaymentHistoryCard;