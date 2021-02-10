import { useState, useCallback } from 'react'
import getConfig from 'next/config'
import { connect } from 'react-redux'

import { withRouter } from 'next/router'
import axios from 'axios'

import Link from 'next/link'
import { Button, Layout, Icon, Input, Avatar, Tooltip, Dropdown, Menu } from 'antd'

import { logout } from '../store/store'

const { Header, Content, Footer } = Layout

import Container from './Container'

const { publicRuntimeConfig } = getConfig()

//style写在外边原因：githubIconStyle 保证对象为同一个 避免重新渲染
const githubIconStyle = {
  color: 'white',
  fontSize: 40,
  display: 'block',
  paddingTop: 10,
  marginRight: 20,
}
const footerStyle = {
  textAlign: 'center'
}

// const Comp = ({ color, children, style }) => <div style={{ color, ...style }}>{children}</div>

function MyLayout ({ children, user, logout, router }) {
  const urlQuery = router.query && router.query.query;
  const [search, setSearch] = useState(urlQuery || ''); //保证刷新后输入框与链接query一致 设置默认值
  const handleSearchChange = useCallback((event) => {
    setSearch(event.target.value)
  }, [setSearch])
  const handleOnSearch = useCallback(() => {
    router.push(`/search?query=${search}`)
  }, [search])
  const handleLogout = useCallback(() => { logout() }, [logout])
  const handleGoToOAuth = useCallback(e => {
    e.preventDefault();  //取消默认跳转
    axios.get(`prepare-auth?url=${router.asPath}`)
      .then(resp => {
        if (resp.status === 200) {
          location.href = publicRuntimeConfig.OAUTH_URL
        } else {
          console.log('prepare auth failed', resp);
        }
      }).catch(err => {
        console.log('prepare auth failed', err)
      })
  }, [])  //[]表示不依赖任何state和props的内容
  const userDropDown = (
    <Menu>
      <Menu.Item>
        <a onClick={handleLogout}>登出</a>
      </Menu.Item>
    </Menu>
  )
  return (
    <Layout>
      <Header>
        <Container renderer={<div className="header-inner" />}>
          <div className="header-left">
            <div className="logo">
              <Link href="/">
                <Icon type="github" style={githubIconStyle} />
              </Link>
            </div>
            <div>
              <Input.Search placeholder="搜索仓库" value={search} onChange={handleSearchChange} onSearch={handleOnSearch} />
            </div>
          </div>
          <div className="header-right">
            <div className="user">
              {
                user && user.id ? (
                  <Dropdown overlay={userDropDown}>
                    <a href='/' >
                      <Avatar size={40} src={user.avatar_url} />
                    </a>
                  </Dropdown>
                ) : (
                    <Tooltip title="点击进行登录">
                      {/* 跳转github OAutn连接 使用prepare-auth该接口是保证在不同页面登录均维持该页面状态 相当于GET请求*/}
                      <a href={`prepare-auth?url=${router.asPath}`} >
                        <Avatar size={40} icon="user" />
                      </a>
                    </Tooltip>
                  )
              }
            </div>
          </div>
        </Container>
      </Header>
      <Content>
        <Container>{children}</Container>
      </Content>
      <Footer style={footerStyle}>
        develop by JinYoMo@<a href="https://github.com/JinYoMo/coco-github">coco-github</a>
      </Footer>
      <style jsx>{`
         .header-inner{
           display:flex;
           justify-content:space-between; 
         }
         .header-left{
           display:flex;
           justify-content:flex-start;
         }
      `}</style>
      <style jsx global>{`
        #__next{
          height:100%;
        }
        .ant-layout{
          min-height:100%;
        }
        .ant-layout-header{
          padding-left:0;
          padding-right:0;
        }
        .ant-layout-content{
          background:#fff;
        }
      `}
      </style>
    </Layout>
  )
}
//export default 必须是一个函数 connect返回的就是函数
export default connect(function mapState (state) {
  return {
    user: state.user
  }
}, function mapReducer (dispatch) {
  return {
    logout: () => dispatch(logout())
  }
})(withRouter(MyLayout))