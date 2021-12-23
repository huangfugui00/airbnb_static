import { createStore, combineReducers, applyMiddleware ,Store} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  userLoginReducer,
} from '../reducers/authReducers'
import {
  profileReducer,
} from '../reducers/profileReducer'

const reducer = combineReducers({
  userLoginReducer: userLoginReducer,
  profileReducer:profileReducer,
})

const initialState = {}


const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)



export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export default store
