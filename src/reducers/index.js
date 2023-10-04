import { combineReducers } from 'redux';
import dataReducers from './dataReducers';

const rootReducer = combineReducers({
  studentState: dataReducers,
});

export default rootReducer;