import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './index'

// 路由守卫组件
const RouterGuard = () => {
  const element = useRoutes(routes)

  return <Suspense fallback={<div>加载中...</div>}>{element}</Suspense>
}

export default RouterGuard
