import { combineReducers } from 'redux';
import newsReducer from './newsReducer'


 const reducers = combineReducers({
  newsCategorys: newsReducer
})

export default reducers