import apiTypes from './types/api.types';

export function responseHasErrored(bool) {
    return {
        type: 'RESPONSE_HAS_ERRORED',
        hasErrored: bool
    };
}
 
export function responseIsLoading(bool) {
    return {
        type: 'RESPONSE_IS_LOADING',
        isLoading: bool
    };
}

export function logout() {
    return {
        type : 'CHANGE_LOGIN_STATUS',
        login: false,
    };
}
 
export function login(url, data) {
    return (dispatch) => {
        dispatch(responseIsLoading(true));
        fetch(url, 
        	{
        	 method: 'POST',
        	 headers: {
    			'Content-Type': 'application/json'
  			 },
         	 body: JSON.stringify({
    		 	"name": data.name,
    		 	"pass": data.pass,
  			 })
         	})
            .then((response) => {
                if (!response.ok) {
                    dispatch(responseHasErrored(true));
                } else {
                    dispatch(responseIsLoading(false));
                    return response;
                }
            })
            .then((response) => dispatch(loginSuccess(response)))
    };
}

function loginSuccess(response) {
    let success;

        if (response.status === 200) {
            success = true;
        } else {
            success = false;
        }
        
        return {
            type: 'CHANGE_LOGIN_STATUS',
            login: success
        };
}

export function getAllSeats(url) {
    return (dispatch) => {
        dispatch(responseIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    responseHasErrored(true);
                } else {
                    dispatch(responseIsLoading(false));
                    return response;
                }
            })
            .then((response) => response.json())
            .then((json) => dispatch(getAllSeatsSuccess(json)))
    };
}

function getAllSeatsSuccess(response) {

    return {
        type: 'GET_ALL_SEATS',
        seats: response
    };
}

export function search(url) {
    return (dispatch) => {
        dispatch(responseIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    responseHasErrored(true);
                } else {
                    dispatch(responseIsLoading(false));
                    return response;
                }
            })
            .then((response) => response.json())
            .then((json) => dispatch(searchSuccess(json)))
    };
}

function searchSuccess(response) {
    return {
        type: 'SEARCH_RESULTS',
        search: response
    };
}