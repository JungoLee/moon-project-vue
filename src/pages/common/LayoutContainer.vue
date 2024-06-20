<!-- LayoutContainer.vue -->
<template>
	<ContainerView>
		<HeaderLayout @triggered="onTriggered" v-if="!$route.meta.isHeader"></HeaderLayout>
		<RouterView></RouterView>
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

<style lang="scss" scoped></style>
