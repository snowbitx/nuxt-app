<script setup lang="ts">
import { computed } from 'vue'
import { menu } from '~~/constants/menu'
import { useAuth } from '~/composables/useAuth'

const { user } = useAuth()

const visibleMenu = computed(() => {
  if (!user.value)
    return []

  return menu.filter((item) => {
    if (!item.roles)
      return true
    return item.roles.includes(user.value.role)
  })
})
</script>

<template>
  <aside class="w-60 border-r p-4">
    <h1 class="mb-6 text-lg font-bold">
      Nova Admin
    </h1>

    <nav class="space-y-2">
      <NuxtLink
        v-for="item in visibleMenu"
        :key="item.path"
        :to="item.path"
        class="block rounded px-3 py-2 hover:bg-accent"
        active-class="bg-accent"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>
  </aside>
</template>
