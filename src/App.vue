<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Hello</router-link> | 
      <router-link to="/store">Store-Test</router-link> | 
      <router-link to="/map-state">mapState</router-link> | 
      <router-link to="/search">mapStateSearch</router-link> | 
      <router-link to="/change">MapStateMutations</router-link> | 
      <router-link to="/actions">MapStateActions</router-link> | 
      <router-link to="/modules">MapStateModules</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
