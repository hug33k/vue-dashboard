<script setup>
	import { useTilesStore } from '@/stores/tiles';
	import { watch, ref, onMounted } from 'vue';
	import * as Tiles from '@/components/tiles';

	const store = useTilesStore();
	const props = defineProps(['tile']);
	const data = ref(null);
	const tileType = ref(null);

	const prepareTile = ({ id }) => {
		data.value = store.getTile(id);
		tileType.value = data.value.type;
	};

	const getContent = (type) => {
		return Tiles[type] || null;
	};

	watch(props, ({ tile }) => {
		prepareTile(tile);
	});

	onMounted(() => {
		prepareTile(props.tile);
	});
</script>

<template>
	<div class="tilegrid-tile" v-if="data">
		<div v-if="tileType" class="tilegrid-tile-header">
			<component :is="getContent(tileType)">
				<h4>{{ data.name }}</h4>
			</component>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.tile-container {
		background: gray;
		color: black;
		border-radius: 10px;
		padding: 25px;
		font-size: 2em;
		text-align: center;
		letter-spacing: 0.25em;
		position: relative;

		h4 {
			position: absolute;
			top: 5px;
			left: 5px;
			font-size: 0.5em;
			letter-spacing: normal;
			opacity: 0.5;
		}
	}
</style>
