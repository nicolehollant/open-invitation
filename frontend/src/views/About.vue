<template>
  <div class="px-2 py-4 h-full m-auto max-w-5xl">
    <div class="h-full flex flex-col space-y-6">
      <Navbar title="About Us" />

      <div class="flex flex-col space-y-8 divide-gray-300 my-2 bg-white rounded-xl p-4 shadow-md">
        <img class="w-64 m-auto" src="@/assets/logo.png" alt="open invitation logo">
        <p>We are Open Invitation! We do things in theater? Idk really, but Anna and Phil are definitely involved. Other than that? Who's to say!!!</p>
      </div>

      <AppFooter />
    </div>
  </div>
</template>


<script>
export default {
  name: 'About',
}
</script>
