import { createReducer } from '@reduxjs/toolkit';

export const subscriptionReducer = createReducer(
  {},
  {
    buySubscriptionReducerRequest: state => {
      state.loading = true;
    },
    buySubscriptionReducerSuccess: (state, action) => {
      state.loading = true;
      state.subscriptionId = action.payload;
    },
    buySubscriptionReducerFail: (state, action) => {
      state.loading = true;
      state.error = action.payload;
    },

    cancelSubscriptionReducerRequest: state => {
      state.loading = true;
    },
    cancelSubscriptionReducerSuccess: (state, action) => {
      state.loading = true;
      state.message = action.payload;
    },
    cancelSubscriptionReducerFail: (state, action) => {
      state.loading = true;
      state.error = action.payload;
    },
  }
);
