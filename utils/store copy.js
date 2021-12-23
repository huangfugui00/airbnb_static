import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  userLoginReducer,
} from '../reducers/authReducers'


const reducer = combineReducers({
  userLogin: userLoginReducer,
})

let userInfoFromStorage
if (typeof window === 'undefined' ){
  userInfoFromStorage = null
}else{
  userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null
}


const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
