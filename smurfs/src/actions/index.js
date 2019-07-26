import axios from 'axios'; // create axios call

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR';

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS });
    axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
            console.log(response);
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data});
        })
        .catch(error => {
            console.log(error.response);
            dispatch({ type: FETCH_SMURFS_ERROR });
        });
};

export const ADD_SMURFS = 'ADD_SMURFS';
export const ADD_SMURFS_SUCCESS = 'ADD_SMURFS_SUCCESS';
export const ADD_SMURFS_ERROR = 'ADD_SMURFS_ERROR';

export const addSmurf = (addSmurf) => dispatch => {
    console.log(addSmurf);
    dispatch({ type: ADD_SMURFS });
    axios
        .post('http://localhost:3333/smurfs', addSmurf)
        .then(response => {
            console.log(response);
            dispatch({ type: ADD_SMURFS_SUCCESS, payload: response.data});
        })
        .catch(error => {
            console.log(error.response);
            dispatch({ type: ADD_SMURFS_ERROR });
        });
};

export const DELETE_SMURFS = 'DELETE_SMURFS';
export const DELETE_SMURFS_SUCCESS = 'DELETE_SMURFS_SUCCESS';
export const DELETE_SMURFS_ERROR = 'DELETE_SMURFS_ERROR';

export const deleteSmurf = (deleteSmurf) => dispatch => {
    console.log(deleteSmurf);
    dispatch({ type: DELETE_SMURFS });
    axios
        .post('http://localhost:3333/smurfs', deleteSmurf)
        .then(response => {
            console.log(response);
            dispatch({ type: DELETE_SMURFS_SUCCESS, payload: response.data});
        })
        .catch(error => {
            console.log(error.response);
            dispatch({ type: DELETE_SMURFS_ERROR });
        });
};
