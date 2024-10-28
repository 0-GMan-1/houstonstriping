import { createStore, combineReducers, applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk'

import { quote, scroll } from './reducers'

const reducer = combineReducers({
	quote, scroll
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState(applyMiddleware(...middleware)))

export default store