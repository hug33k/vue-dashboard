<script setup>
	import { ref, onUnmounted, onMounted } from 'vue';

	const time = ref(null);

	const tick = () => {
		time.value = new Date();
	};

	const interval = ref(setInterval(tick, 1000));

	onMounted(() => {
		tick();
	});

	onUnmounted(() => {
		clearInterval(interval.value);
	});
</script>

<template>
	<div class="tile-container">
		<div v-if="time" class="clock">
			<slot />
			{{ time.toLocaleTimeString("fr-FR") }}
		</div>
	</div>
</template>

<style scoped>
	div.tile-container:has(.clock) {
		background: lightcoral;
		color: white;
		height: calc(var(--block-unit) * 1);
		width: calc(var(--block-unit) * 3);
	}
</style>
