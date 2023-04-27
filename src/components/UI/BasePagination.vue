<template>
  <div class="wrapper">
    <div
        v-for="pageNumber in getPages"
        :key="pageNumber"
        class="page"
        :class="{
                 'pointer': Number.isInteger(pageNumber),
                 'current-page': page === pageNumber
               }"
        @click="setPage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'base-pagination',
  data() {
    return {
      pages: []
    }
  },
  methods: {
    setPage(pageNumber) {
      if (Number.isInteger(pageNumber)) {
        this.$emit('updatePage', pageNumber)
      }
    }
  },
  props: {
    page: {
      type: Number
    },
    totalPages: {
      type: Number
    }
  },
  computed: {
    getPages: function () {
      this.pages = [1, '...', this.page - 1, this.page, this.page + 1, '...', this.totalPages]
      if (this.page < 4) {
        this.pages = [1, 2, 3, 4, '...', this.totalPages]
      }
      if (this.page > this.totalPages - 2) {
        this.pages = [1, '...', this.totalPages - 3, this.totalPages - 2, this.totalPages - 1, this.totalPages]
      }
      if (this.totalPages <= 4) {
        this.pages = []
        for (let i = 1; i <= this.totalPages; i++) {
          this.pages.push(i)
        }
      }
      return this.pages
    }
  }
}
</script>

<style lang="scss" scoped>

.wrapper {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 15px;
  padding-bottom: 35px;

  .page {
    border-radius: 3px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.13);
    border: 1px solid rgba(0, 0, 0, 0.07);
    padding: 10px;
    user-select: none;

    &.pointer {
      cursor: pointer;
    }

    &.current-page {
      background-color: rgba(76, 76, 76, 0.06);
      box-shadow: none;
    }
  }
}


</style>


