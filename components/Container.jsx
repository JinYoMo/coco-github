import { cloneElement } from 'react'

const style = {
  width: '100%',
  maxWidth: 1200,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 20,
  paddingRight: 20
}

//cloneElement将renderer进行拷贝，然后增加了一些props，以此来扩展想要渲染的renderer节点
export default ({ children, renderer = <div /> }) => {
  const newElement = cloneElement(renderer, {
    style: Object.assign({}, renderer.props.style, style),  //避免style重名被覆盖
    children
  })
  return newElement
}
// export default ({ children, comp: Comp = "div" }) => {
//   return <Comp style={style}>{children}</Comp>
// }