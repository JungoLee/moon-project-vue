import { createApp, ref, onMounted, watchEffect, watch, nextTick, onBeforeMount } from 'vue';
import App from './App.vue';
import Router from '@router/router';
import appRoutes from '@router/appRoutes';
import commonRoutes from '@router/common/commonRoutes';

window.ref = ref;
window.mounted = onMounted;
window.watchEffect = watchEffect;
window.watch = watch;
window.nextTick = nextTick;
window.beforeMount = onBeforeMount;

import '@assets/styles/global/font.scss';
import '@assets/styles/global/reset.scss';

const router = new Router([...appRoutes, ...commonRoutes]).getInstance();
window.$router = router;

createApp(App).use(router).mount('#app');
