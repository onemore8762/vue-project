<template>
  <header class="header">
    <img
        src="@/assets/logo.png"
        class="img"
        alt="Логотип Vue"
    />
    <div class="buttons">
      <router-link class="link" to="/">Posts</router-link>
      <router-link class="link" to="/task">Task 2</router-link>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

.header {
  position: relative;
  height: 50px;
  background: #ffffff;
  box-shadow: 1px 1px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 40px;

  .img {
    width: 25px
  }

  .buttons {
    margin-left: auto;

    .link {
      padding: 10px 15px;
      border-radius: 5px;
      text-decoration: none;
      color: #304455;
      transition: background-color .4s;
      font-family: sans-serif;

      &.router-link-active {
        color: #0061d9;
      }

      &:hover {
        transition: background-color .4s;
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
  }
}
</style>
