import { combineReducers } from 'redux';
import activeItemReducer from './reducer_active_item';

const rootReducer = combineReducers({
  activeItem: activeItemReducer
});

export default rootReducer;
