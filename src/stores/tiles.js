import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import * as Tiles from '@/components/tiles';

const initialState = {
	"d20969cd-6cda-403b-822b-0d0325607ab3": {
		id: "d20969cd-6cda-403b-822b-0d0325607ab3",
		name: "Clock",
		type: "Clock",
	},
	"768abb63-bb5a-4c13-91c0-6c65a69c862e": {
		id: "768abb63-bb5a-4c13-91c0-6c65a69c862e",
		name: "Dev",
		type: "Dev",
	},
	"fed2f582-1394-4e94-bd9c-a4b50dd70ceb": {
		id: "fed2f582-1394-4e94-bd9c-a4b50dd70ceb",
		name: "Random",
		type: "Gradient",
	},
};

export const useTilesStore = defineStore('tiles', () => {
	const tiles = ref(initialState);
	const currentId = ref(null);
	const types = ref(Object.keys(Tiles));

	const setCurrent = (id) => {
		currentId.value = id;
	};

	const current = computed(() => tiles.value[currentId.value]);

	const getTile = (id) => {
		return tiles.value[id];
	};

	const addTile = (tile) => {
		tiles.value[tile.id] = tile;
	};

	const editTile = (tile) => {
		tiles.value[tile.id] = tile;
	};

	const deleteTile = (tile) => {
		delete tiles.value[tile.id];
	};

	return { tiles, types, currentId, current, setCurrent, getTile, addTile, editTile, deleteTile };
});
