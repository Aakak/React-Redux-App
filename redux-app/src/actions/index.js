import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';


 //this does async action
export const fetchList = () => dispatch => { 
        dispatch({ type: 'START_FETCHING'})
      axios
    //   .get('https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts')
      .get('https://api.jikan.moe/v3/genre/anime/1/1')
      .then(res => dispatch( {type: FETCH_SUCCESS, payload: res.data.anime }))
      .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
    };




// const thunk = next => action => store => {
//     if (typeof action === 'object') {
//         next(action); // this forwards the action unthouched 
//     }else if (typeof action === 'function') {
//         action(store.dispatch) //stop the action and call the function 
//     }
// }