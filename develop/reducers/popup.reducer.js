import popupTypes from '../actions/types/popup.types';

export function loginPopupVisibility(state = false, action) {
    switch (action.type) {
        case popupTypes.SHOW_LOGIN_POPUP:
            return action.loginPopupVisibility;
 
        default:
            return state;
    }
}

export function seatPopupVisibility(state = false, action) {
    switch (action.type) {
        case popupTypes.SHOW_SEAT_POPUP:
            return action.seatPopupVisibility;
 
        default:
            return state;
    }
}

export function seatTitleEditing(state = false, action) {
    switch (action.type) {
        case popupTypes.TITLE_EDITING:
            return action.seatTitleEditing;
 
        default:
            return state;
    }
}