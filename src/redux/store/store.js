import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from '../slices/tokenSlice';
import loginReducer from '../slices/loginSlice'

const store = configureStore({
  reducer: {
    token: tokenReducer,
    login: loginReducer,
  },
});

export default store;