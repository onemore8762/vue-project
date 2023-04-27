<template>
  <div class="wrapper">
    <div class="comments" v-for="comment in comments" :key="comment.id">
      <div class="comments-title">
        <div class="avatar"></div>
        <span class="name">{{ comment.name }}</span>
      </div>
      <span class="body">{{ comment.body }}</span>
    </div>
  </div>
</template>

<script>
import {useComments} from "@/hooks/useComments";

export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const {comments} = useComments(props.id)
    return {
      comments
    }
  }
}
</script>

<style lang="scss" scoped>

.wrapper {
  cursor: default;
  display: flex;
  gap: 15px;
  flex-direction: column;
  margin-top: 10px;

  .comments {
    display: flex;
    flex-direction: column;

    .comments-title {
      display: flex;
      align-items: center;
      gap: 10px;

      .avatar {
        flex-shrink: 0;
        height: 25px;
        width: 25px;
        border-radius: 50%;
        background-color: #304455;
      }

      .name {
        font-weight: 600;
      }

    }

    .body {
      margin-top: 5px;
    }
  }
}


</style>
