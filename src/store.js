import { createStore, combineReducers } from 'redux'
import home from '@/views/Home/store'

const reducers = combineReducers({
  home,
})

const store = createStore(reducers)

export default store