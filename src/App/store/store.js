import { configureStore, combineReducers } from "@reduxjs/toolkit";
import currentReducer from './currentSlice.js';
import ressourcesReducer from "./ressourcesSlice.js";

const store=configureStore({
    reducer:combineReducers({
        ressources:ressourcesReducer,
        current:currentReducer
    }),
    devTools:true
})
/* store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch({type:'toto'});
store.dispatch({type:'current/update', payload:{titre:'coucou'}});
store.dispatch({type:'current/clear'}); */

export default store