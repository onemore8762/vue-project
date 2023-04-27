import {onMounted, ref, watch} from "vue";
import {debounce} from "@/lib/debounce";
import {postService} from "@/services/postService";

export function usePosts(limit) {
    const posts = ref([])
    const totalPages = ref(0)
    const page = ref(1)
    const selectedSort = ref('')
    const searchQuery = ref('')
    const isPostsLoading = ref(true)
    const pages = ref([])
    const fetching = async (defaultPage) => {
        try {
            isPostsLoading.value = true
            const response = await postService.posts({
                _page: defaultPage || page.value,
                _limit: limit,
                q: searchQuery.value,
                _sort: selectedSort.value,
                _order: 'asc'
            })

            if (defaultPage) {
                page.value = defaultPage
            }

            totalPages.value = Math.ceil(response.headers['x-total-count'] / limit)
            posts.value = response.data
        } catch (e) {
            console.log(e)
        } finally {
            isPostsLoading.value = false
        }
    }

    watch([searchQuery, selectedSort], debounce(() => fetching(1), 500))
    watch(page, fetching)

    onMounted(fetching)

    return {
        posts,
        selectedSort,
        totalPages,
        isPostsLoading,
        searchQuery,
        page,
        pages
    }
}
