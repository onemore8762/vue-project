import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import components from '@/components/UI/index'

const app = createApp(App)

components.forEach(components => {
    app.component(components.name, components)
})

app
    .use(router)
    .mount('#app')
