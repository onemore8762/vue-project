<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'base-button'
}
</script>

<style lang="scss" scoped>
.btn {
  font-family: Verdana, sans-serif;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px 15px;
  background: #0061d9;
  border-radius: 3px;
  color: #ffffff;
  transition: .1s;
  border: none;

  &:hover {
    transition: .1s;
    background-color: #013e89;
  }

  &.disabled {
    opacity: 0.5;
  }

  &.disabled:hover {
    background: #0061d9;
  }

}


</style>
