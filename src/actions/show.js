import * as actionType from './actionType';

export const changeUiTitle = (title) => {
  return {
    type: actionType.CHANGE_PAGE_TITLE,
    title
  }
}

// export const toggleIsSubpage = (isSubpage = false) => {
//   return {
//     type: actionType.TOGGLE_IS_SUBPAGE,
//     isSubpage
//   }
// }

export const hiddenNavOrBar = (isShowNav = true,isShowTab = true) => {
  return {
    type: actionType.HIDDEN_NAV,
    isShowNav,
    isShowTab
  }
}

// export const hiddenTab = (isShowTab = true) => {
//   return {
//     type: actionType.HIDDEN_TAB,
//     isShowTab
//   }
// }