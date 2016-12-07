import { combineReducers } from 'redux';

import { loginPopupVisibility, seatPopupVisibility } from './popup.reducer.js'
import { login, responseHasErrored, responseIsLoading, seats, search } from './api.reducer.js';
import { currentSeat } from './seats.reducer.js';

const rootReducer = combineReducers({
    loginPopupVisibility,
    seatPopupVisibility,
    login,
    responseHasErrored,
    responseIsLoading,
    seats,
    search,
    currentSeat
});

export default rootReducer;
