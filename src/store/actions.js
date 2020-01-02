export const fetchRepos = (username) => async dispatch => {
  try {
    dispatch({
      type: 'SET_LOADING',
      loading: true
    })
    dispatch({
      type: 'SET_MESSAGE',
      message: ''
    })
    dispatch({
      type: 'SET_REPOS',
      repos: []
    })
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=created`)
    const repos = await response.json()
    if(repos.message) {
      throw new Error(repos.message)
    }
    dispatch({
      type: 'SET_REPOS',
      repos
    })
    dispatch({
      type: 'SET_LOADING',
      loading: false
    })
  } catch(err) {
    let message = err.message
    if(message === 'Not Found') {
      message = 'Username not found'
    }
    dispatch({
      type: 'SET_LOADING',
      loading: false
    })
    dispatch({
      type: 'SET_MESSAGE',
      message
    })
  }
}