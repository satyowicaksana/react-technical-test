import React, { useState } from 'react';
import { Form, Icon, Input, Button, List, Spin, Alert } from 'antd';
import { fetchRepos } from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import './Home.css'

export default () => {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()
  const repos = useSelector(state => state.repos)
  const loading = useSelector(state => state.loading)
  const message = useSelector(state => state.message)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(fetchRepos(username))
  }

  return (
    <>
      <div className="container">
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
            <Button type="primary" htmlType="submit" disabled={!username}>
              Show Repos
            </Button>
          </Form.Item>
        </Form>
        { message && <Alert style={{marginTop: '20px'}} message={message} closable type="error" /> }
        { loading ? (
          <Spin style={{marginTop: '20px'}} size="large" />
        ) : (
          <List
            style={{textAlign: 'left'}}
            itemLayout="horizontal"
            dataSource={repos}
            pagination={{
              pageSize: 10,
            }}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={<b><a href="https://ant.design">{item.name}</a></b>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        )}
      </div>
    </>
  )
}