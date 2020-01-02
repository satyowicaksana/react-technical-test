import React, { useState } from 'react';
import { Icon, List, Spin, Alert } from 'antd';
import { fetchRepos } from '../store/actions'
import { useDispatch } from 'react-redux'
import './Home.css'
import RepoForm from '../components/RepoForm'
import Repos from '../components/Repos'

export default () => {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(fetchRepos(username))
  }

  return (
    <>
      <div className="container">
        <RepoForm username={username} setUsername={setUsername} handleSubmit={handleSubmit}></RepoForm>
        <Repos></Repos>
      </div>
    </>
  )
}