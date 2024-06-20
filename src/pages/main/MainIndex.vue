<!-- MainIndex.vue -->
<template>
	<div>
		<HomeContainer />
		<AboutContainer />
		<WorkContainer />
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
			index: null,
		};
	},
	created() {
		this.index = this.$root.index;
		this.onTriggered();
	},
	methods: {
		onTriggered() {
			// 여기에 원하는 함수를 실행하도록 설정합니다.
			console.log('??');
		},
	},
};
</script>

<style lang="scss" scoped></style>
