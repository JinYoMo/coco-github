import Link from 'next/link'
import { Button } from 'antd'
export default ({ children }) => (
  <>
    <header>
      <Link href="/test/a?id=1" as="/test/a/1">
        <Button>A</Button>
      </Link>
      <Link href="/b">
        <Button>B</Button>
      </Link>
    </header>
    {children}
  </>
)