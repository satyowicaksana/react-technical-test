import React from 'react';
import { useSelector } from 'react-redux'
import { Icon, Alert, Spin, List } from 'antd'

export default () => {
  const repos = useSelector(state => state.repos)
  const loading = useSelector(state => state.loading)
  const message = useSelector(state => state.message)

  const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );

  return (
    <>
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
            <List.Item
              actions={[
                <IconText type="star-o" text={item.stargazers_count} key="list-vertical-star-o" />,
                <IconText type="fork-o" text={item.forks} key="list-vertical-fork-o" />
              ]}>
              <List.Item.Meta
                title={<b><a href={item.html_url}>{item.name}</a></b>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      )}
    </>
  )
}