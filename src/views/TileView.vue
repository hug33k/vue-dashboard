<script setup>
	import { onMounted, watch } from 'vue';
	import { RouterView } from 'vue-router';
	import { storeToRefs } from 'pinia';
	import { useTilesStore } from '@/stores/tiles';
	import MenuComponent from '@/components/MenuComponent.vue';
	import TileComponent from '@/components/TileComponent.vue';

	const props = defineProps(['id']);
	const store = useTilesStore();
	const { current: tile } = storeToRefs(store);

	const selectTile = (id) => {
		store.setCurrent(id);
	}

	watch(props, ({ id }) => {
		selectTile(id);
	});

	onMounted(() => {
		selectTile(props.id);
	});
</script>

<template>
	<main v-if="tile">
		<h3>{{ tile.name }}</h3>
		<MenuComponent>
			<RouterLink :to="{ name: 'tile-edit', params: { id: tile.id } }">Edit</RouterLink>
		</MenuComponent>
		<RouterView />
		<TileComponent :tile="tile" />
	</main>
</template>
