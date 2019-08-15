import { combineReducers } from 'redux';
import { user } from './user.reducer';
import theme from './theme.reducer';

export default combineReducers({
  user,
  theme,
});