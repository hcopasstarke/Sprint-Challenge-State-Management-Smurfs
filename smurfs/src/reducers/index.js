import {
    FETCH_SMURFS,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_ERROR,
    ADD_SMURFS,
    ADD_SMURFS_SUCCESS,
    ADD_SMURFS_ERROR,
    DELETE_SMURFS,
    DELETE_SMURFS_SUCCESS,
    DELETE_SMURFS_ERROR,
} from '../actions';

const initialState = {
    isLoading: false,
    error: '',
    smurfs: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            };
        case FETCH_SMURFS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: 'Loading error'
            };
        case ADD_SMURFS:
            return {
                ...state,
                isLoading: true
            };
        case ADD_SMURFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            };
        case ADD_SMURFS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: 'Unable to add smurf.'
            };
        case DELETE_SMURFS:
            return {
                ...state,
                isLoading: true
            };
        case DELETE_SMURFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            };
        case DELETE_SMURFS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: 'Unable to delete smurf.'
            };
        default: 
            return state;
                
    }
};

export default reducer;