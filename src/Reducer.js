import * as ActionTypes from './ActionTypes'


export default (state, action) => {
    const {params} = action;
    switch (action.type) {
        case ActionTypes.POST_REQUEST:
            return {...state, "aaa": "ccc"};
        default:
            return state
    }
}