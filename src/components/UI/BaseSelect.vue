<template>
  <select
      :value="modelValue"
      @change="changeOptions"
      class="select"
  >
    <option disabled value="">
      Выберите из списка
    </option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'base-select',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOptions(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.select {
  font-family: Verdana, sans-serif;
  border-radius: 3px;
  border: 1px solid #d7d7d7;
  padding: 5px;
}
</style>
