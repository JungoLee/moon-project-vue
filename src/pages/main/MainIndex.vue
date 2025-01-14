<template>
	<!-- MainIndex.vue -->
	<div>
		<MainUtillityMenu :index="currentIndex" @setIndex="currentIndex = $event" />
		<HomeContainer v-show="currentIndex === 0" />
		<!-- <AboutContainer v-show="currentIndex === 1" />
		<WorkContainer v-show="currentIndex === 2" /> -->
	</div>
</template>

<script>
import MainUtillityMenu from '@/components/layout/MainUtillityMenu.vue';
import HomeContainer from '@/components/pageLayout/HomeContainer.vue';
// import AboutContainer from '@/components/pageLayout/AboutContainer.vue';
// import WorkContainer from '@/components/pageLayout/WorkContainer.vue';
export default {
	components: {
		MainUtillityMenu,
		HomeContainer,
		// AboutContainer,
		// WorkContainer,
	},
	data() {
		return {
			currentIndex: 0, // 초기 currentIndex 값을 설정합니다.
		};
	},
	created() {},
	mounted() {},
	methods: {},
};
</script>

<style lang="scss" scoped></style>
