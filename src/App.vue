<script setup>
	import { RouterLink, RouterView } from 'vue-router';
	import MenuComponent from './components/MenuComponent.vue';
</script>

<template>
	<header>
		<h1>VueDashboard</h1>
		<MenuComponent>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/dashboards">Dashboards</RouterLink>
			<RouterLink to="/tiles">Tiles</RouterLink>
			<RouterLink to="/settings">Settings</RouterLink>
		</MenuComponent>
	</header>

	<main>
		<RouterView />
	</main>
</template>

<style scoped lang="scss">
	header {
		line-height: 1.5;
		max-height: 100vh;
		border-bottom: 1px solid $white;

		@media (min-width: 1024px) {
			display: flex;
			place-items: center;
			padding-right: calc(var(--section-gap) / 2);

			.wrapper {
				display: flex;
				place-items: flex-start;
				flex-wrap: wrap;
			}
		}
	}
</style>
