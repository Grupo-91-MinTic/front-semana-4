<template>
  <div>
    <h1>hello
      
    </h1>

    <nav>
      <router-link to="/"
        ><span>Home</span></router-link
      >
      |
      <router-link to="/about"
        ><span>About</span></router-link
      >
      |
      <router-link to="/"
        ><span>Sing out</span></router-link
      >
    </nav>
  </div>
</template>
<script>
export default {
  name: "Home",
  components: {
  },
};
</script>