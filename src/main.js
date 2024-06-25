import { createApp, ref, onMounted, watchEffect, watch, nextTick, onBeforeMount } from 'vue';
import App from './App.vue';
import Router from '@router/router';
import appRoutes from '@router/appRoutes';
import commonRoutes from '@router/common/commonRoutes';
import gsap from 'gsap'; // gsap 라이브러리를 불러옵니다.

window.ref = ref;
window.mounted = onMounted;
window.watchEffect = watchEffect;
window.watch = watch;
window.nextTick = nextTick;
window.beforeMount = onBeforeMount;

import '@assets/styles/globals/font.scss';
import '@assets/styles/globals/reset.scss';
import '@assets/styles/comp/swiper.5.4.5.scss';

const router = new Router([...appRoutes, ...commonRoutes]).getInstance();
window.$router = router;

const app = createApp(App); // 애플리케이션 인스턴스를 생성합니다.
app.config.globalProperties.gsap = gsap; // this.gsap

app.use(router).mount('#app');
