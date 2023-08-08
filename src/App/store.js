import {configureStore} from '@reduxjs/toolkit'
import usersReducer from '../feautures/users/userSlice'
import authSlice from '../feautures/users/authSlice';

export const store = configureStore({
    reducer: {
        users: usersReducer,
        auth: authSlice
    }
})
