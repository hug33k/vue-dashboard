<template>
	<div class="tile-container">
		<div class="dev">
			<slot />
			&lt;dev&gt;
		</div>
	</div>
</template>

<style scoped>
	div.tile-container:has(.dev) {
		background: lightblue;
		color: black;
		height: calc(var(--block-unit) * 1);
		width: calc(var(--block-unit) * 2);
	}
</style>
