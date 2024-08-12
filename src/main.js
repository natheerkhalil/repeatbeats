import './assets/css/styles.css'
import './assets/css/flex.css'
import './assets/css/reset.css'
import './assets/css/media.css'
import './assets/css/props.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// csrf token
import axios from 'axios';

/*axios.get('https://xylophone-api-d07fa4529327.herokuapp.com/api/csrf-token')
    .then(response => {
        axios.defaults.headers.common['X-XSRF-TOKEN'] = response.data.csrf_token;
    })
    .catch(error => {
        console.error('Error fetching CSRF token:', error);
    });*/

// axios config
import { API_URL } from '../config'
import { MAINTENANCE_MODE } from '../config'

axios.defaults.timeout = 999999;
axios.defaults.baseURL = API_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

// axios requests
import { request } from "@/utils/api";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');

const exemptedRoutes = ["privacy", "terms"];
function checkMaintenanceMode() {
    const currentRouteName = router.currentRoute.value.name;

    if (MAINTENANCE_MODE === "true" || MAINTENANCE_MODE === "1" && !exemptedRoutes.includes(currentRouteName)) {
        router.push({ name: 'maintenance' });
    }
}

// Check maintenance mode every second
setInterval(checkMaintenanceMode, 1000);

export {
    request
};
