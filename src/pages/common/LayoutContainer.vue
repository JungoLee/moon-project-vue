<!-- LayoutContainer.vue -->
<template>
	<ContainerView>
		<HeaderLayout @triggered="onTriggered" v-if="!$route.meta.isHeader"></HeaderLayout>
		<div id="container">
			<RouterView></RouterView>
		</div>
		<FooterLayout v-if="!$route.meta.isFooter"></FooterLayout>
	</ContainerView>
</template>

<script>
import ContainerView from '@comp.layout/ContainerView.vue';
import HeaderLayout from '@comp.layout/HeaderLayout.vue';
import FooterLayout from '@comp.layout/FooterLayout.vue';

export default {
	components: {
		ContainerView,
		HeaderLayout,
		FooterLayout,
	},
	methods: {
		onTriggered() {
			this.$emit('triggered', true);
		},
	},
};
</script>

<style lang="scss" scoped>
#container {
	max-width: 1280px;
	margin: 0 auto;
}
</style>
