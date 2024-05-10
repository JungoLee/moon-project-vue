<template>
	<ContainerView>
		<HeaderLayout v-if="$route.meta.isHeader"></HeaderLayout>
		<RouterView></RouterView>
	</ContainerView>
</template>

<script setup>
import ContainerView from '@comp.layout/ContainerView.vue';
import HeaderLayout from '@comp.layout/HeaderLayout.vue';
</script>

<style lang="scss" scoped></style>
