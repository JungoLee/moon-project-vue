const HomeContainer = () => import('@/pages/main/MainIndex.vue');
const AboutContainer = () => import('@/pages/main/AboutContainer.vue');
const WorkContainer = () => import('@/pages/main/WorkContainer.vue');
const ComponentIndex = () => import('@/pages/pub/ComponentIndex.vue');

export default [
	{
		path: '/',
		component: HomeContainer,
		name: '홈',
	},
	{
		path: '/about',
		component: AboutContainer,
		name: '어바웃',
	},
	{
		path: '/work',
		component: WorkContainer,
		name: '워크',
	},
	{
		path: '/component-index',
		component: ComponentIndex,
		name: '컴포넌트 인덱스',
	},
];
