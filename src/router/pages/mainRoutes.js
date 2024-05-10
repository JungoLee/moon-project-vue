const PATH = '/main';

const A01Page = () => import('@/pages/main/A01Page.vue');
const A02Page = () => import('@/pages/main/A02Page.vue');
const A03Page = () => import('@/pages/main/A03Page.vue');

export default [
	{
		path: PATH + '/A01Page',
		component: A01Page,
		name: 'A01Page',
		meta: {
			isHeader: true,
			codinglistData: {
				category: '메인',
				depth1: '공지사항 팝업',
				status: '',
				'script-status': '',
				'done-d': '',
				'modify-d': '',
				etc: '',
			},
		},
	},
	{
		path: PATH + '/A02Page',
		component: A02Page,
		name: 'A02Page',
		meta: {
			isHeader: true,
			codinglistData: {
				category: '메인',
				depth1: '메인',
				status: '완료',
				'script-status': '',
				'done-d': '',
				'modify-d': '',
				etc: '',
			},
		},
	},
	{
		path: PATH + '/A03Page',
		component: A03Page,
		name: 'A03Page',
		meta: {
			isHeader: true,
			codinglistData: {
				category: '메인',
				depth2: '서브',
				status: '완료',
				'script-status': '',
				'done-d': '',
				'modify-d': '',
				etc: '',
			},
		},
	},
];
