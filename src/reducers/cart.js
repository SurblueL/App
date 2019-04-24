import * as actionType from '../actions/actionType';
const initState = {
  list:  JSON.parse(window.localStorage.getItem('mycart')) || []
}

const syncCartStorage = (carlist) => {
  window.localStorage.setItem('mycart', JSON.stringify(carlist))
}

// console.log(initState.list)
export default (state = initState, action) => {
  switch(action.type) {
     case actionType.ADD_TO_CART:
    //  console.log(action)
     const { list } = action;
     const existPro  = state.list.some(item => item.id === list.id);
     if (existPro) {
      const newAddList = state.list.map(item => {
        if (item.id === list.id) {
          item.count = item.count + 1;
        }
        return item;
      })
      syncCartStorage(newAddList);
      return Object.assign({}, state, {
        list: newAddList
      });
    }else {
      list.count = 1;
      list.checked = false;
      const newList = state.list.concat(list);
      syncCartStorage(newList);
      return Object.assign({}, state, {
        list: newList
      })
    }

    case actionType.CART_REDUCE:
      const newList = state.list.reduce((result, item) => {
        console.log('剑法', result, item)
        if (item.id === action.id) {
          if (item.count <= 0) {
            return
          }
          item.count = item.count - 1;
        }
        if (item.count > 0) {
          result.push(item);
        }
        return result;
      }, [])
      syncCartStorage(newList);
      return Object.assign({}, state, {
        list: newList
      });

      case actionType.CART_ADD:
      const newAddList = state.list.map(item => {
        if (item.id === action.id) {
          item.count = item.count + 1;
        }
        return item;
      })
      syncCartStorage(newAddList);
      return Object.assign({}, state, {
        list: newAddList
      });

      case actionType.COUNT_INPUT_CHANGE: 
      const inputValue = state.list.map(item => {
        if (item.id === action.id) {
          item.count = action.count;
        }
        return item;
      })
      syncCartStorage(inputValue);
      return Object.assign({}, state, {
        list: inputValue
      });
    default:
      return state;
  }
}