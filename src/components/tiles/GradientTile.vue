<template>
	<div class="tile-container">
		<div class="gradient">
		</div>
	</div>
</template>

<style scoped>
	div.tile-container:has(.gradient) {
		background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
		color: black;
		height: calc(var(--block-unit) * 1);
		width: calc(var(--block-unit) * 1);
	}
</style>
