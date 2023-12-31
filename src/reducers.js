// reducers.js
import { combineReducers } from 'redux';
import * as actionTypes from './actions';

const imageReducer = (state = '/fish-spinning.gif', action) => {
  switch (action.type) {
    case actionTypes.SET_LOGO_IMAGE:
      return action.payload;
    default:
      return state;
  }
};

const menuReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.SET_MENU:
      return action.payload;
    default:
      return state;
  }
};

const dateReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_DATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  logoImagePath: imageReducer,
  menuList: menuReducer,
  currentDate: dateReducer,
});

export default rootReducer;
