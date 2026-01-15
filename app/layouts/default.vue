<template>
  <div class="flex h-screen bg-background text-foreground">
    <AppSidebar />

    <div class="flex flex-1 flex-col">
      <AppHeader title="Dashboard" />

      <main class="flex-1 overflow-auto p-6">
        <slot />
      </main>
    </div>
  </div>
</template>
