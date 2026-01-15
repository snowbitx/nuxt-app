<template>
  <aside class="w-60 border-r p-4">
    <h1 class="mb-6 text-lg font-bold">
      Nova Admin
    </h1>

    <nav class="space-y-2">
      <NuxtLink
        to="/"
        class="block rounded px-3 py-2 hover:bg-accent"
        active-class="bg-accent"
      >
        Dashboard
      </NuxtLink>

      <NuxtLink
        to="/users"
        class="block rounded px-3 py-2 hover:bg-accent"
        active-class="bg-accent"
      >
        Users
      </NuxtLink>

      <NuxtLink
        to="/settings"
        class="block rounded px-3 py-2 hover:bg-accent"
        active-class="bg-accent"
      >
        Settings
      </NuxtLink>
    </nav>
  </aside>
</template>
