const MainIndex = () => import('@/pages/main/MainIndex.vue');
const ComponentIndex = () => import('@/pages/pub/ComponentIndex.vue');

export default [
	{
		path: '/',
		component: MainIndex,
		name: '홈',
	},
	{
		path: '/component-index',
		component: ComponentIndex,
		name: '컴포넌트 인덱스',
	},
	{
		path: '/index.html',
		redirect: '/',
	},
];
