import {onMounted, ref} from "vue";
import {postService} from "@/services/postService";

export function useComments(postId) {
    const comments = ref([])

    const fetchingComments = async () => {
        try {
            const response = await postService.comments({
                postId: postId
            })
            comments.value = response.data
        } catch (e) {
            console.log(e)
        }
    }

    onMounted(fetchingComments)

    return {
        comments
    }
}
