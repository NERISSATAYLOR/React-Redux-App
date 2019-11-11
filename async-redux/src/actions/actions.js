import axios from 'axios';
//action types
export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getDummy = () => dispatch => {
    //console.log("action");
    dispatch({ type: FETCH_LOADING });
    axios
        .get(`https://overwatch-api.net/api/v1/hero`)
        .then(response =>
            dispatch({
                type: FETCH_SUCCESS,
                payload: response.data.data
            }))
        .catch(error => dispatch({
            type: FETCH_FAIL,
            payload: error
        }))
};

//example of an action creator that does this when a user log in:
// function loginUser(creds){
// return function(dispatch){
//  return  axios.post('/login', creds).then(res =>{
   // const loggedInAction = { type: USER_LOGGED_IN, payload: res.data.user}
//dispatch(logedInAction);
//});
//}
//}

        //dispatch({type: FETCH_LOADING})








