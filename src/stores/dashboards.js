import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

const initialState = {
	"a954745a-43fe-4f8e-bd30-0c1c233d2e09": {
		id: "a954745a-43fe-4f8e-bd30-0c1c233d2e09",
		name: "First dashboard",
		tiles: [
			{
				id: "d20969cd-6cda-403b-822b-0d0325607ab3",
			},
		]
	},
	"70f0376c-b064-442b-b678-3bf78704e275": {
		id: "70f0376c-b064-442b-b678-3bf78704e275",
		name: "Dev dashboard",
		tiles: [
			{
				id: "768abb63-bb5a-4c13-91c0-6c65a69c862e",
			},
		]
	},
	"0b9fa655-807a-4ec2-922a-a09d4d5b1e1a": {
		id: "0b9fa655-807a-4ec2-922a-a09d4d5b1e1a",
		name: "Misc",
		tiles: [
			{
				id: "768abb63-bb5a-4c13-91c0-6c65a69c862e",
			},
			{
				id: "fed2f582-1394-4e94-bd9c-a4b50dd70ceb",
			},
			{
				id: "d20969cd-6cda-403b-822b-0d0325607ab3"
			}
		]
	},
};

export const useDashboardsStore = defineStore('dashboards', () => {
	const dashboards = ref(initialState);
	const currentId = ref(null);

	const setCurrent = (id) => {
		currentId.value = id;
	};

	const current = computed(() => dashboards.value[currentId.value]);

	const addDashboard = (dashboard) => {
		dashboards.value[dashboard.id] = dashboard;
	};

	const editDashboard = (dashboard) => {
		dashboards.value[dashboard.id] = dashboard;
	};

	const deleteDashboard = (dashboard) => {
		delete dashboards.value[dashboard.id];
	};

	return { dashboards, currentId, current, setCurrent, addDashboard, editDashboard, deleteDashboard };
});
