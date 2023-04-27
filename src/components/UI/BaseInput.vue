<template>
  <input
      :value="modelValue"
      @input="updateInput"
      class="input"
  />
</template>

<script>
export default {
  name: 'base-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  border-radius: 5px;
  border: 1px solid #d7d7d7;
  padding: 10px 15px;
  outline: none;
  box-shadow: 0 0 5px 0 rgba(67, 68, 69, 0.09);

  &:focus {
    border: 1px solid #a2a2a2;
    box-shadow: 0 0 5px 0 rgba(67, 68, 69, 0.35);
  }
}

</style>
