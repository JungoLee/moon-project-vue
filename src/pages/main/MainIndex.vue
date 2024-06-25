<!-- MainIndex.vue -->
<template>
	<div>
		<HomeContainer v-show="index === 0" />
		<AboutContainer v-show="index === 1" />
		<WorkContainer v-show="index === 2" />
	</div>
</template>

<script>
import HomeContainer from '@/components/pageLayout/HomeContainer.vue';
import AboutContainer from '@/components/pageLayout/AboutContainer.vue';
import WorkContainer from '@/components/pageLayout/WorkContainer.vue';
export default {
	components: {
		HomeContainer,
		AboutContainer,
		WorkContainer,
	},
	data() {
		return {
			index: 0, // 초기 index 값을 설정합니다.
		};
	},
	created() {},
	mounted() {},
	methods: {},
};
</script>

<style lang="scss" scoped></style>
