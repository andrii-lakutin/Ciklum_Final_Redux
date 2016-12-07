export function currentSeat(state = false, action) {
    switch (action.type) {
        case 'CHANGE_CURRENT_SEAT':
            return action.currentSeat;
        default:
            return state;
    }
}