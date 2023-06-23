<script setup>
	import Tile from '@/components/TileComponent.vue';
	const props = defineProps(['tiles']);
</script>

<template>
	<div class="tilegrid-container">
		<Tile v-for="tile in props.tiles" :key="tile.id" :tile="tile" />
	</div>
</template>

<style scoped lang="scss">
	.tilegrid-container {
		display: flex;
		justify-content: space-evenly;
		flex-direction: row;
		flex-wrap: wrap;
		grid-gap: 10px;
		height: fit-content;
		width: 100%;
	}
</style>