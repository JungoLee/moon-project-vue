const HomeIndex = () => import('@/pages/main/HomeIndex.vue');
const ComponentIndex = () => import('@/pages/pub/ComponentIndex.vue');

export default [
	{
		path: '/',
		component: HomeIndex,
		name: '홈',
		meta: {
			isHeader: false,
		},
	},
	{
		path: '/component-index',
		component: ComponentIndex,
		name: '컴포넌트 인덱스',
		meta: {
			isHeader: true,
		},
	},
];
