<template>
	<ContainerView>
		<HeaderLayout v-if="!$route.meta.isHeader"></HeaderLayout>
		<RouterView></RouterView>
		<FooterLayout v-if="!$route.meta.isFooter"></FooterLayout>
	</ContainerView>
</template>

<script setup>
import ContainerView from '@comp.layout/ContainerView.vue';
import HeaderLayout from '@comp.layout/HeaderLayout.vue';
import FooterLayout from '@comp.layout/FooterLayout.vue';
</script>

<style lang="scss" scoped></style>
