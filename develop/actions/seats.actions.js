import {seatPopupVisibility} from './popup.actions.js';

export function chooseSeat(seat) {
    return {
        type: "CHANGE_CURRENT_SEAT",
        currentSeat: seat
    };
}

export function chooseSeatAndOpenPopup(seat) {
    return (dispatch) => {
        dispatch(seatPopupVisibility(true));
        dispatch(chooseSeat(seat));
    };
}