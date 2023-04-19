import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';
import jwtDecode from 'jwt-decode';
//Create slice is used for preparing a slice of our global state
//when we have data that is not directly related, also we can craete different slices in different files to make our code more maintainable
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
    },
    reducers: {
        login(state, action) {
            const cookies = new Cookies();
            //Get the token from the payload
            const jwtToken = action.payload;
            const decodedUserObject = jwtDecode(jwtToken);
            //Set user state
            state.user = decodedUserObject;
            //Set cookie
            cookies.set('jwt_auth', jwtToken, {
                //exp date is stored different
                expries: new Date(decodedUserObject.exp * 1000),
            });
        },

        logout(state) {
            state.user = null;
            const cookies = new Cookies();
            cookies.remove('jwt_authorization');
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice;
