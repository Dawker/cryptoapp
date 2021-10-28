import { Reducer } from 'redux';
import { GET_NEWS_CATEGORY, INews ,IAction} from '../../typescript/reducers.types';

 const newsReducer: Reducer<INews[] | [],IAction> = (state = [], action) => {
  switch (action?.type) { 
    case GET_NEWS_CATEGORY:
      const newState = action.payload
      return [
        ...state,
        newState
      ]
    default:
      return state;
  }
};

export default newsReducer;