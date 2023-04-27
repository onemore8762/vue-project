import {$api} from "@/api/api";

export const postService = {
    posts(params) {
        return $api.get('posts', {
            params
        })
    },
    comments(params) {
        return $api.get('comments', {
            params
        })
    },

}
