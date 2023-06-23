<script setup>
	import { onMounted, ref, watch } from 'vue';
	import { RouterView, useRoute } from 'vue-router';
	import { storeToRefs } from 'pinia';
	import { useDashboardsStore } from '@/stores/dashboards';
	import TileGrid from '@/components/TileGridComponent.vue';
	import MenuComponent from '../components/MenuComponent.vue';

	const props = defineProps(['id']);
	const store = useDashboardsStore();
	const { current: dashboard } = storeToRefs(store);
	const showTiles = ref(false);
	const route = useRoute();

	const selectDashboard = (id) => {
		store.setCurrent(id);
	}

	watch(props, ({ id }) => {
		selectDashboard(id);
	});

	watch(route, ({ name }) => {
		showTiles.value = (name === 'dashboard-view');
	});

	onMounted(() => {
		selectDashboard(props.id);
		showTiles.value = (route.name === 'dashboard-view');
	});
</script>

<template>
	<main v-if="dashboard">
		<h3>{{ dashboard.name }}</h3>
		<MenuComponent>
			<RouterLink :to="{ name: 'dashboard-edit', params: { id: dashboard.id } }">Edit</RouterLink>
		</MenuComponent>
		<RouterView />
		<TileGrid v-if="showTiles" :tiles="dashboard.tiles" />
	</main>
</template>
