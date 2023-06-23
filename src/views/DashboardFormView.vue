<script setup>
	import { ref, watch, onMounted } from 'vue';
	import { useRoute, useRouter } from 'vue-router';
	import { storeToRefs } from 'pinia';
	import { useDashboardsStore } from '@/stores/dashboards';
	import { useTilesStore } from '@/stores/tiles';

	const props = defineProps(['id']);
	const route = useRoute();
	const router = useRouter();
	const action = ref(null);
	const data = ref({});
	const store = useDashboardsStore();
	const tilesStore = useTilesStore();
	const { tiles } = storeToRefs(tilesStore);

	watch(route, ({ name }) => {
		action.value = name.split('-')[1];
	});

	watch(action, (value) => {
		switch (value) {
			case "edit":
				data.value = { ...store.current };
				data.value.tilesList = data.value.tiles.map(({ id }) => id);
				break;
			default:
				data.value = {};
		}
	});

	onMounted(() => {
		store.setCurrent(props.id);
		action.value = route.name.split('-')[1];
	});

	const handleForm = (newData) => {
		newData.tilesList.forEach((id) => {
			if (!newData.tiles.find((tile) => tile.id === id)) {
				newData.tiles.push({ id });
			}
		});
		newData.tiles.forEach((tile) => {
			if (!newData.tilesList.includes(tile.id)) {
				newData.tiles.splice(newData.tiles.indexOf(tile), 1);
			}
		});
		store.editDashboard(newData);
		router.push({ name: "dashboard-view", params: { id: newData.id } });
	}
</script>

<template>
	<FormKit type="form" @submit="handleForm" :submit-label="action" v-model="data">
		<FormKit type="text" name="id" id="id" label="ID" placeholder="Generated" disabled />
		<FormKit type="text" name="name" id="name" label="Name" validation="required" placeholder="Dashboard name" />
		<FormKit type="checkbox" name="tilesList" id="tilesList" label="Tiles"
			:options="Object.keys(tiles).map(id => ({ value: id, label: tiles[id].name }))" />
	</FormKit>
</template>

<style scoped lang="scss">
	.formkit-form {
		display: flex;
		flex-direction: column;
		gap: 25px;
		padding: 25px 0;

		:deep(.formkit-wrapper) {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			gap: 25px;

			label {
				width: 25%;
				text-align: right;
			}

			.formkit-inner {
				width: 75%;

				&>* {
					width: 100%;
				}
			}
		}

		:deep(.formkit-option) {
			.formkit-wrapper {
				display: initial;

				&>* {
					display: inline-block;
				}

				.formkit-inner {
					width: 50px !important;
				}

				.formkit-label {
					text-align: left;
				}
			}
		}
	}
</style>