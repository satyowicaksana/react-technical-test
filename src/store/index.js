import { createStore, applyMiddleware } from 'redux'
import Thunk from 'redux-thunk'

const initialRepo = { repos: [], loading: false, message: ''}

function repoReducer(state = initialRepo, action) {
  switch (action.type) {
    case 'SET_REPOS':
      return {
        ...state,
        repos: action.repos
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.loading
      }
    case 'SET_MESSAGE':
      return {
        ...state,
        message: action.message
      }
    default:
      return state
  }
}

let store = createStore(repoReducer, applyMiddleware(Thunk))

export default store