import { createStore, applyMiddleware } from 'redux'
import Thunk from 'redux-thunk'

const initialRepo = { repos: [] }

function repoReducer(state = initialRepo, action) {
  switch (action.type) {
    case 'SET_REPOS':
      return {
        ...state,
        repos: action.repos
      }
    default:
      return state
  }
}

let store = createStore(repoReducer, applyMiddleware(Thunk))

export default store