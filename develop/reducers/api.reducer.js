import apiTypes from '../actions/types/api.types';

export function responseHasErrored(state = false, action) {
    switch (action.type) {
        case 'RESPONSE_HAS_ERRORED':
            return action.hasErrored;
 
        default:
            return state;
    }
}
 
export function responseIsLoading(state = false, action) {
    switch (action.type) {
        case 'RESPONSE_IS_LOADING':
            return action.isLoading;
 
        default:
            return state;
    }
}
 
export function login(state = false, action) {
    switch (action.type) {
        case 'CHANGE_LOGIN_STATUS':
            return action.login;
 
        default:
            return state;
    }
}

export function seats(state = [], action) {
    switch (action.type) {
        case 'GET_ALL_SEATS':
            return action.seats;

        default:
            return state;
    }
}

export function search(state = [], action) {
    switch (action.type) {
        case 'SEARCH_RESULTS':
            return action.search;

        default:
            return state;
    }
}
