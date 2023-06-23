<script setup>
	import { RouterLink, RouterView } from 'vue-router';
	import { storeToRefs } from 'pinia';
	import { useDashboardsStore } from '@/stores/dashboards';
	import MenuComponent from '../components/MenuComponent.vue';

	const store = useDashboardsStore();

	const { dashboards } = storeToRefs(store, ['dashboards']);
</script>

<template>
	<main>
		<h2>Dashboards</h2>
		<MenuComponent>
			<RouterLink v-for="dashboard in dashboards" :key="dashboard.id"
				:to="{ name: 'dashboard-view', params: { id: dashboard.id } }">{{ dashboard.name }}</RouterLink>
		</MenuComponent>
		<RouterView />
	</main>
</template>
