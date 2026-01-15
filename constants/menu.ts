export interface MenuItem {
  label: string
  path: string
  roles?: string[] // 允许访问的角色
}

export const menu: MenuItem[] = [
  {
    label: 'Dashboard',
    path: '/',
    roles: ['admin', 'user'],
  },
  {
    label: 'Users',
    path: '/users',
    roles: ['admin'],
  },
  {
    label: 'Settings',
    path: '/settings',
    roles: ['admin', 'user'],
  },
]
