export const fetchRepos = (username) => async dispatch => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`)
  const repos = await response.json()
  dispatch({
    type: 'SET_REPOS',
    repos
  })
}