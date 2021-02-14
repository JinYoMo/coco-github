import { useState, useCallback, useRef } from 'react'
import { Select, Spin } from 'antd'
import debounce from 'lodash/debounce'

import api from '../lib/api'

const Option = Select.Option

function SearchUser ({ onChange, value }) {
  //{current:0}
  const lastFetchIdRef = useRef(0)  //useRef消除闭包陷阱
  const [fetching, setFetching] = useState(false)
  const [options, setOptions] = useState([])

  //debounce 用户输入的时间超过500ms才会执行
  const fetchUser = useCallback(debounce(value => {
    console.log('fetching user', value)

    lastFetchIdRef.current += 1
    const fetchId = lastFetchIdRef.current  //每次请求id
    setFetching(true)
    setOptions([])  //清空数据

    //服务端请求
    api.request({
      url: `/search/users?q=${value}`
    })
      .then(resp => {
        console.log('user:', resp)
        //在一次请求未结束 下一次请求开始时 直接将上一请求抛弃
        if (fetchId !== lastFetchIdRef.current) {
          return
        }
        const data = resp.data.items.map(user => ({
          text: user.login,
          value: user.login
        }))

        setFetching(false)
        setOptions(data)
      })
  }, 500), [])

  const handleChange = (value) => {
    setOptions([])  //选择结束
    setFetching(false)
    onChange(value)
  }

  return <Select
    style={{ width: 200 }}
    showSearch={true}
    notFoundContent={fetching ? <Spin size="small" /> : <span>nothing</span>}
    filterOption={false}
    placeholder="创建者"
    value={value}
    onChange={handleChange}
    onSearch={fetchUser}
    allowClear={true}
  >
    {
      options.map(op => (
        <Option value={op.value} key={op.value}>{op.text}</Option>
      ))
    }
  </Select>
}

export default SearchUser