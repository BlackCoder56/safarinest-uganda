import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Bootstrap and BootstrapVueNext CSS files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

// Import the createBootstrap function and necessary components
import { createBootstrap } from 'bootstrap-vue-next'

// Create your app
const app = createApp(App)

// Add BootstrapVueNext to your Vue app
app.use(createBootstrap()) // Pass plugins or components as needed

// Use the router
app.use(router)

// Mount the app
app.mount('#app')
