import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DashboardsListView from '../views/DashboardsListView.vue';
import DashboardView from '../views/DashboardView.vue';
import DashboardFormView from '../views/DashboardFormView.vue';
import TilesListView from '../views/TilesListView.vue';
import TileView from '../views/TileView.vue';
import TileFormView from '../views/TileFormView.vue';
import SettingsView from '../views/SettingsView.vue';
import { useDashboardsStore } from '../stores/dashboards.js';
import { useTilesStore } from '../stores/tiles.js';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/dashboards',
			name: 'dashboards',
			component: DashboardsListView,
			children: [
				{
					path: ':id',
					name: 'dashboard-view',
					component: DashboardView,
					props: true,
					children: [
						{
							path: 'edit',
							name: 'dashboard-edit',
							component: DashboardFormView,
							props: true,
						}
					]
				},
			]
		},
		{
			path: '/tiles',
			name: 'tiles',
			component: TilesListView,
			children: [
				{
					path: ':id',
					name: 'tile-view',
					component: TileView,
					props: true,
					children: [
						{
							path: 'edit',
							name: 'tile-edit',
							component: TileFormView,
							props: true,
						}
					]
				},
			]
		},
		{
			path: '/settings',
			name: 'settings',
			component: SettingsView,
		}
	]
});

router.beforeEach(() => {
	useDashboardsStore();
	useTilesStore();
});

export default router;
