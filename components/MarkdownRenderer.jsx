
import MarkdownIt from 'markdown-it'
import { memo, useMemo } from 'react'
import 'github-markdown-css'


const md = new MarkdownIt({
  html: true,//支持html标签转化
  linkify: true //转化成可以点击的链接
})

//将有中文的真正转成可见的非乱码字符串
function b64_to_utf8 (str) {
  return decodeURIComponent(escape(atob(str)))
}

export default memo(function MarkdownRenderer ({ content, isBase64 }) {

  const markdown = isBase64 ? b64_to_utf8(content) : content
  const html = useMemo(() => md.render(markdown), [markdown])
  return (
    <div className="markdown-body">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
})