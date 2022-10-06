export const signin = (FormData, history) => async dispatch => {
  try {
    // log in the current user..
    history.push('/')
  } catch (error) {
    console.log(error)
  }
}

export const signup = (FormData, history) => async dispatch => {
  try {
    // signup the current user..
    history.push('/')
  } catch (error) {
    console.log(error)
  }
}
