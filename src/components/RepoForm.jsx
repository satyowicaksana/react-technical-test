import React from 'react';
import { Form, Input, Icon, Button } from 'antd';

export default ({ username, setUsername, handleSubmit }) => {
  return (
    <>
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
    </>
  )
}
