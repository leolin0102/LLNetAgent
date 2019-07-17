import {createStore} from 'redux'
import reducer from './Reducer'
const initValues = {
    'response': '',
    'title': 'Hello World!',
    'requestList': [
        {"name": "login", "desc": "登录请求"}, 
        {"name": "logout", "desc": "登出请求"},
        {"name": "add Request", "desc": ""}
    ]
}

const store = createStore(reducer, initValues)

export default store;