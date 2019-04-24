import * as actionType from '../actions/actionType';

const initState = {
    pageTitle: '首页',
    isShowNav: true,
    isShowTab: true,
  }
// console.log(initState.pageTitle)
  export default (state = initState, action) => {
    switch(action.type) {
      case actionType.CHANGE_PAGE_TITLE:
      // console.log(action)
        return {
          ...state,
          pageTitle: action.title
        };
        case actionType.HIDDEN_NAV:
      return {
        ...state,
        isShowNav: action.isShowNav
      };
      case actionType.HIDDEN_TAB:
      return {
        ...state,
        isShowTab: action.isShowTab
      };
      default:
        return state;
    }
  }