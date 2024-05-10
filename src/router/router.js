import { createRouter, createWebHistory } from 'vue-router';

class Router {
	constructor(routes) {
		this.router = createRouter({
			history: createWebHistory('/'),
			routes,
		});
	}

	getInstance = () => this.router;
}

export default Router;
