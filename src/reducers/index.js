import { combineReducers } from 'redux';

import show from './show';
import cart from './cart';

export default combineReducers({
  show,
  cart
});
