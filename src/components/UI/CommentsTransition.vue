<template>
  <transition name="transition">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'comments-transition',
  props: {
    name: String
  }
}
</script>


<style lang="scss" scoped>
.transition-enter-active {
  animation: ani .15s;
}

.transition-enter, .transition-leave-to {
  animation: ani-revert .15s;
}

@keyframes ani {
  0% {
    opacity: 0;
    max-height: 0;
  }
  100% {
    opacity: 1;
    max-height: 1000px;
  }
}

@keyframes ani-revert {
  0% {
    opacity: 1;
    max-height: 1000px;

  }
  100% {
    opacity: 0;
    max-height: 0;
  }
}
</style>
