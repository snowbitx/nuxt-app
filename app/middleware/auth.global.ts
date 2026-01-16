import { useAuth } from '~/composables/useAuth'

export default defineNuxtRouteMiddleware((to) => {
  const { user } = useAuth()

  const roles = to.meta.roles as string[] | undefined

  // 页面未设置 roles → 默认允许访问
  if (!roles || roles.length === 0) {
    return
  }

  // 未登录
  if (!user.value) {
    return navigateTo('/login')
  }

  // 无权限
  if (!roles.includes(user.value.role)) {
    return navigateTo('/')
  }
})
