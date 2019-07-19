import * as ActionTypes from './ActionTypes'

export const post = (params) => {
    return {
        type: ActionTypes.POST_REQUEST,
        params: {"aaa": "bbb"}
    }
}

export const addRequest = (params) => {
    return {
        type: ActionTypes.ADD_REQUEST,
        params: {"name": "url", "desc": ""}
    }
}