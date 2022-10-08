import * as api from '../api/index'
import { AUTH } from '../constants/actionTypes'

export const signin = (FormData, history) => async dispatch => {
  try {
    const { data } = await api.signIn(FormData)
    dispatch({ type: AUTH, data })
    history.push('/')
  } catch (error) {
    console.log(error)
  }
}

export const signup = (FormData, history) => async dispatch => {
  try {
    const { data } = await api.signUp(FormData)
    dispatch({ type: AUTH, data })
    history.push('/')
  } catch (error) {
    console.log(error)
  }
}
