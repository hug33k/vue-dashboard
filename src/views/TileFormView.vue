<script setup>
	import { ref, watch, onMounted } from 'vue';
	import { useRoute, useRouter } from 'vue-router';
	import { useTilesStore } from '@/stores/tiles';

	const props = defineProps(['id']);
	const route = useRoute();
	const router = useRouter();
	const action = ref(null);
	const data = ref({});
	const store = useTilesStore();

	watch(route, ({ name }) => {
		action.value = name.split('-')[1];
	});

	watch(action, (value) => {
		switch (value) {
			case "edit":
				data.value = { ...store.current };
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
		store.editTile(newData);
		router.push({ name: "tile-view", params: { id: newData.id } });
	}
</script>

<template>
	<FormKit type="form" @submit="handleForm" :submit-label="action" v-model="data">
		<FormKit type="text" name="id" id="id" label="ID" placeholder="Generated" disabled />
		<FormKit type="text" name="name" id="name" label="Name" validation="required" placeholder="Tile name" />
		<FormKit type="select" name="type" id="type" label="Type" validation="required" :options="store.types" />
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
	}
</style>
