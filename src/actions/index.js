export const increment = (nr) => {
  return {
    type: 'INCREMENT',
    payload: nr
  }
}

export const decrement = (nr) => {
  return {
    type: 'DECREMENT',
    payload: nr
  }
}

export const logIn = () => {
  return {
    type: 'SIGN_IN'
  }
}