<template>
	<LayoutContainer></LayoutContainer>
</template>

<script>
import LayoutContainer from '@pages/common/LayoutContainer.vue';

export default {
	components: {
		LayoutContainer,
	},

	mounted() {},
	methods: {},
};
</script>

<style scoped lang="scss"></style>
<style lang="scss">
html {
	text-size-adjust: 100%;
	font-size: $global-font-size;
	font-weight: 400;
	@include languages();
}
html,
body {
	overflow-y: auto;
	overflow-x: hidden;
	height: 100%;
	color: $global-font-color;
	background-color: $global-background-color;
}
</style>
