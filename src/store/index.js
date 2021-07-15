import { createStore } from 'redux'
import { username, password } from '../data/data'

const initialState = {
     username,
     password
}

const reducer = (state=initialState, action) =>
{
     return state
}

const store = createStore(reducer)

export default store