<!-- app/layouts/default.vue -->
<template>
  <div class="flex h-screen bg-background text-foreground">
    <!-- Sidebar -->
    <aside class="w-60 border-r p-4">
      <h1 class="mb-6 text-lg font-bold">
        Nova Admin
      </h1>

      <nav class="space-y-2">
        <NuxtLink to="/" class="block rounded px-3 py-2 hover:bg-accent">
          Dashboard
        </NuxtLink>

        <NuxtLink to="/users" class="block rounded px-3 py-2 hover:bg-accent">
          Users
        </NuxtLink>

        <NuxtLink to="/settings" class="block rounded px-3 py-2 hover:bg-accent">
          Settings
        </NuxtLink>
      </nav>
    </aside>

    <!-- Main -->
    <div class="flex flex-1 flex-col">
      <!-- Header -->
      <header class="flex h-14 items-center justify-between border-b px-6">
        <div class="font-medium">
          Dashboard
        </div>

        <div class="flex items-center gap-3">
          <span class="text-sm text-muted-foreground">admin@example.com</span>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 overflow-auto p-6">
        <slot />
      </main>
    </div>
  </div>
</template>
