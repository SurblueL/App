import * as actionType from './actionType';

export const cartReduce = (id) => {
  return {
    type: actionType.CART_REDUCE,
    id
  }
}

export const cartAdd = (id) => {
  console.log(id)
  return {
    type: actionType.CART_ADD,
    id
  }
}

export const addToCart = (list) => {
  // console.log(cartItem)
  return {
    type: actionType.ADD_TO_CART,
    list
  }
}

export const countInputChange = (id, count) => {
  return {
    type: actionType.COUNT_INPUT_CHANGE,
    id,
    count
  }
}