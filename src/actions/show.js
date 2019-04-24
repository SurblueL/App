import * as actionType from './actionType';

export const changeUiTitle = (title) => {
  return {
    type: actionType.CHANGE_PAGE_TITLE,
    title
  }
}

export const hiddenNavOrBar = (isShowNav = true,isShowTab = true) => {
  return {
    type: actionType.HIDDEN_BOTH,
    isShowNav,
    isShowTab
  }
}

export const hiddenNav = (isShowNav = false) => {
  return {
    type: actionType.HIDDEN_TAB,
    isShowNav
  }
}

export const HIDDEN_NAV = (isShowTab = true) => {
  return {
    type: actionType.HIDDEN_TAB,
    isShowTab
  }
}