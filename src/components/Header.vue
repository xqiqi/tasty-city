<template>
  <div class="nav">
    <div class="logo"><img src="" /></div>
    <ul>
      <li class="active">首页</li>
      <li>地图</li>
    </ul>
    <div class="user">
      <div class="avatar"></div>
    </div>
    <div class="search">
      <input id="navSearch" type="text" placeholder="搜索..." />
    </div>

    <input id="collapseBtn" type="button" value="-" />
  </div>
</template>

<script>
  export default {
    name: 'nav'
  }
</script>

<style scoped>
ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav {
  width: 100%;
  height: 64px;
  position: fixed;
  border-bottom: 1px solid #eee;
}
.nav > * {
  float: left;
}
.nav > .logo {
  margin-top: 8px;
}
.nav > ul > li {
  float: left;
  padding: 20px 10px;
  margin-left: 15px;
  cursor: pointer;
  font-size: 14px;
}
.nav > ul > li:hover,
.nav > ul > li.active {
  color: #51557e;
}
.nav > .search,
.nav > .user {
  float: right;
}
.nav > .user > .avatar {
  width: 32px;
  height: 32px;
  margin: 16px 0;
  border-radius: 16px;
  background-color: #eee;
  cursor: pointer;
}
#navSearch {
  width: 270px;
  height: 32px;
  margin: 16px;
  padding: 0 15px;
  border: none;
  background-color: #eee;
}
#collapseBtn{
  float: right;
  width: 30px;
  height: 30px;
  margin: 16px 0;
  display: none;
  border: 1px solid #51557e;
  background: none;
  color: #51557e;
  cursor: pointer;
}

@media (max-width: 800px) {
  .nav > ul,
  .nav > .search,
  .nav > .user {
    display: none;
  }
  #collapseBtn {
    display: block;
  }
}
</style>
