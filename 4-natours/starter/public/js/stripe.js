import axios from 'axios';
import { showAlert } from './alert';
const stripe = Stripe('pk_test_4CKl1yejaNOg6Hn0kmDcXDjA00fNv7S76P');

export const bookTour = async tourId => {
  // 1) Get checkout session from api
  try {
    const session = await axios(
      `http://127.0.0.1:8000/api/v1/bookings/checkout-session/${tourId}`
    );
    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
  console.log(session);

  // 3)
};
