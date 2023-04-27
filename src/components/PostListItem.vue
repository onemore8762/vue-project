<template>
  <div>
    <div v-if="isPostsLoading"
         class="post"
         @click="isOpen = !isOpen">
      <div class="content">
        <div class="title"> {{ post.title }}</div>
        <div class="body"> {{ post.body }}</div>
      </div>
      <h4 class="comments">Комментарии: {{ isOpen ? '\\/' : '<' }} </h4>
      <comments-transition>
        <post-list-item-comments
            @click.stop
            v-show="isOpen"
            :id="post.id"
        />
      </comments-transition>
    </div>
    <div v-else
         key="post-skeleton"
         class="post"
    >
      <div class="content">
        <div class="title">
          <base-skeleton style="height: 15px"/>
        </div>
        <div class="body">
          <base-skeleton style="height: 21px"/>
        </div>
        <base-skeleton style="height: 21px"/>
      </div>
    </div>
  </div>
</template>

<script>
import PostListItemComments from "@/components/PostListItemComments.vue";

export default {
  components: {PostListItemComments},
  props: {
    post: {
      type: Object,
      required: true
    },
    isPostsLoading: {
      type: Boolean
    }
  },
  data() {
    return {
      isOpen: false,
    }
  }
}
</script>

<style scoped>
.post {
  cursor: pointer;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #d7d7d7;
  margin-top: 15px;
  box-shadow: 1px 1px 5px 0 rgba(67, 68, 69, 0.07);
}

.content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.title {
  font-weight: 600;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.16);
}

.comments {
  margin-top: 15px;
}
</style>
