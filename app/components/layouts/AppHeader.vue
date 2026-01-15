<script setup lang="ts">
const { title } = usePageMeta()
</script>

<template>
  <header class="flex h-14 items-center justify-between border-b px-6">
    <div class="font-medium">
      {{ title }}
    </div>

    <div class="flex items-center gap-3">
      <span class="text-sm text-muted-foreground">admin@example.com</span>
    </div>
  </header>
</template>
