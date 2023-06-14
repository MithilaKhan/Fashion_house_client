

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { useLoaderData } from 'react-router-dom';
import SectionTitle from '../../../Component/SectionTitle';
import CheckOutForm from '../CheckOutForm/CheckOutForm';

const Payment = () => {
  const selectClass = useLoaderData();
  const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk)

  return (
    <div className=''>
      <SectionTitle heading=" Please provide Payment">
      </SectionTitle>
      <Elements stripe={stripePromise}>

        <CheckOutForm
          name={selectClass.name}
          price={selectClass.price}
          id={selectClass._id}
          selectClassId={selectClass.selectClassId}
        >
        </CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;