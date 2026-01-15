import { useRoute } from '#app'
import { computed } from 'vue'

export function usePageMeta(): Record<string, any> {
  const route = useRoute()

  const title = computed(() => {
    return (route.meta as Record<string, any>)?.title ?? 'Nova Admin'
  })

  return { title }
}
