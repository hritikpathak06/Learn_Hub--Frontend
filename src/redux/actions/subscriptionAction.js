import { server } from '../store';
import axios from 'axios';

// Buy Subscription
export const buySubscription = () => async dispatch => {
  try {
    dispatch({ type: 'buySubscriptionReducerRequest' });
    const { data } = await axios.get(`${server}/subscribe`, {
      withCredentials: true,
    });
    dispatch({
      type: 'buySubscriptionReducerSuccess',
      payload: data.subscriptionId,
    });
    console.log(data);
  } catch (error) {
    dispatch({
      type: 'buySubscriptionReducerFail',
      payload: error.response.data.message,
    });
  }
};

// Cancel Subscription
export const cancelSubscription = () => async dispatch => {
  try {
    dispatch({ type: 'cancelSubscriptionReducerRequest' });
    const { data } = await axios.delete(`${server}//subscribe/cancel`, {
      withCredentials: true,
    });
    dispatch({
      type: 'cancelSubscriptionReducerSuccess',
      payload: data.message,
    });
    console.log(data);
  } catch (error) {
    dispatch({
      type: 'cancelSubscriptionReducerFail',
      payload: error.response.data.message,
    });
  }
};
