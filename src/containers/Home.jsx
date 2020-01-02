import React, { useState } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { fetchRepos } from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'

export default () => {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()
  const repos = useSelector(state => state.repos)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(username)
    dispatch(fetchRepos(username))
  }

  return (
    <>
      <p>this is home</p>
      <Form layout="inline" onSubmit={handleSubmit}>
        <Form.Item>
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Show Repos
          </Button>
        </Form.Item>
      </Form>
      <p>{JSON.stringify(repos)}</p>
    </>
  )
}