import * as ActionTypes from './ActionTypes'


export default (state, action) => {
    const {params} = action;
    switch (action.type) {
        case ActionTypes.POST_REQUEST:
            return {...state, "aaa": "ccc"};
        case ActionTypes.ADD_REQUEST:
            params.append({"name": "logout", "desc": "登出请求"})
            return {...state, "requestList": params}
        default:
            return state
    }
}