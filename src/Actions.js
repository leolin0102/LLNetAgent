import * as ActionTypes from './ActionTypes'

export const post = (params) => {
    return {
        type: ActionTypes.POST_REQUEST,
        params: {"aaa": "bbb"}
    }
}