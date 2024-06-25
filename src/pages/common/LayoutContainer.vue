<!-- LayoutContainer.vue -->
<template>
	<ContainerView>
		<HeaderLayout v-if="!$route.meta.isHeader"></HeaderLayout>
		<div id="container">
			<router-view></router-view>
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
	data() {
		return {
			content: 0,
		};
	},
	methods: {},
};
</script>

<style lang="scss" scoped>
#container {
	max-width: 1280px;
	margin: 0 auto;
}
</style>
