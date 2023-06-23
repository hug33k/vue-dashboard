<script setup>
	import { RouterLink, RouterView } from 'vue-router';
	import { storeToRefs } from 'pinia';
	import { useTilesStore } from '@/stores/tiles';
	import MenuComponent from '../components/MenuComponent.vue';

	const store = useTilesStore();

	const { tiles } = storeToRefs(store, ['tiles']);
</script>

<template>
	<main>
		<h2>Tiles</h2>
		<MenuComponent>
			<RouterLink v-for="tile in tiles" :key="tile.id" :to="{ name: 'tile-view', params: { id: tile.id } }">{{
				tile.name }}
			</RouterLink>
		</MenuComponent>
		<RouterView />
	</main>
</template>
