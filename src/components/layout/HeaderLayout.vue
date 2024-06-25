<template>
	<header class="uid-header">
		<router-link to="/" class="logo-uxgroup">
			<img :src="logo" alt="Logo" />
		</router-link>
	</header>
</template>

<script>
import logo from '@/assets/images/logo.png';

export default {
	data() {
		return {
			index: 1,
			logo: logo,
		};
	},
	methods: {},
};
</script>

<style lang="scss" scoped>
.uid-header {
	text-align: center;
	@include rem(font-size, 18);

	.logo-uxgroup {
		@include rem(padding, 24 0);
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>
