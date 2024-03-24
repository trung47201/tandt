import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import messages from '@/locale/messages';
import { createI18n } from 'vue-i18n';

import './assets/css/tailwind.css'
import './assets/css/global.css'

const app = createApp(App)

const i18n = createI18n({
    locale: "en",
    messages: messages
})

const exchangeRate = "24790"

library.add(fas);
library.add(fab);

app.use(router)
app.use(i18n)
app.use(exchangeRate)

app
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');

