//Redux is all about having one central data store in the app, exactly one store
//all the app cross componennt or app wide state you hjave goes through this one store
//the components subscriebe to the store, and whenever data chagnes the store notified the components
//components never manipulate directly the store data
//for manipulating and changong the data we use a concept named reducers
//reducer functiona re responsible for mutating or cahnging the store data.
//Reduce functiona re a concept for example take an input and reduce that number to an output
//so they transform inputs and spit out new output as a new result
//components dispatch, or rigger actions (objects) which describe the kind of operation
//Reducer function should be a pure function/ same input leads to same output/ no side effects
//so you must not send HTTP requests, or write something to local storage, or fetch something from local storage
//so reducers shouls take the given inputs that are provided by redux and reduces the expected output
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice';

//configureStore makes merging one reducer into a single one simplier
//configuration store where we set the reducer properties
//When work with multiple slices you still have only one store, reducers being merge
const store = configureStore({
    //creating a map of reducers, underneath the scene the reducers will be marge into a bif reducer
    reducer: { auth: authSlice.reducer },
});

export default store;
