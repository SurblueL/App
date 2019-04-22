import * as actionType from './actionType';

export const cartReduce = (id) => {
  return {
    type: actionType.CART_REDUCE,
    id
  }
}

export const cartAdd = (id) => {
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