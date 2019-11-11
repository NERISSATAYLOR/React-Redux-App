//reducer pure function that return a new state based on current state and an action
//(state,action) => new state
import {
    FETCH_LOADING,
    FETCH_SUCCESS,
    FETCH_FAIL
} from '../actions/actions';

const initialState = {
    dummy: [],
    // name: "",
    // description: "",
    // health: "",
    // armor: "",
    // url: "",
    error: "",
    isFetching: false

};

function reducer(state = initialState, action) {
    console.log('reducer running', action);
    switch (action.type) {
        case FETCH_LOADING:
            return {
                ...state,
                isFetching: true,
                error: "Uh oh... You havent built out your action file"
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                dummy: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}
export default reducer;