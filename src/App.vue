<template>
  <div id="app">
  <router-view name="header"></router-view>
  <router-view name="main"></router-view>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: #333;
}
input {
  outline: none;
}
</style>
