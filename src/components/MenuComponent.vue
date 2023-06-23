<template>
	<nav>
		<slot />
	</nav>
</template>

<style scoped lang="scss">
	nav {
		width: 100%;
		max-width: 500px;
		text-align: center;
		margin: 25px auto;
		font-weight: 100;
		margin-top: 2rem;
		display: flex;
		justify-content: space-around;

		&:deep(a) {
			padding: 0 1rem;

			&.router-link-active {
				color: var(--color-text);

				&:hover {
					background-color: transparent;
				}
			}
		}

		@media (min-width: 1024px) {
			text-align: left;
			margin-left: -1rem;
			font-size: 1rem;

			padding: 1rem 0;
			margin-top: 1rem;
		}
	}
</style>
