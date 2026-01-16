import { ref } from 'vue'

export interface User {
  id: string
  name: string
  role: 'admin' | 'user'
}

const currentUser = ref<User | null>({
  id: '1',
  name: 'Admin',
  role: 'admin', // 👈 你可以改成 'user' 试试看效果
})

export function useAuth(): Record<string, any> {
  return {
    user: currentUser,
  }
}
