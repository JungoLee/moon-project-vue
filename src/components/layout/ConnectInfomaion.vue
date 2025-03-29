<template>
	<div class="connect-infomation-wrap">
		<a href="tel:01032690202" target="_blank" title="새창열기">
			<i class="ico-phone" aria-hidden="true"></i>
		</a>
		<a href="https://open.kakao.com/o/stA8hBah" target="_blank" title="새창열기">
			<i class="ico-kakao" aria-hidden="true"></i>
		</a>
	</div>
</template>

<script>
import logo from '@/assets/images/logo.png';

export default {
	props: ['index'], // 부모 컴포넌트로부터 index를 prop으로 받습니다.
	data() {
		return {
			logo: logo,
		};
	},

	methods: {},
};
</script>

<style lang="scss" scoped>
.connect-infomation-wrap {
	display: flex;
	align-items: center;
	justify-content: center;
	@include rem(gap, 12);
	.ico-phone {
		display: inline-block;
		@include rem(width, 60);
		@include rem(height, 60);
		@include rem(background-size, 60);
		background-image: url(@/assets/images/ico_phone.png);
	}
	.ico-kakao {
		display: inline-block;
		@include rem(width, 60);
		@include rem(height, 60);
		@include rem(background-size, 60);
		background-image: url(@/assets/images/ico_kakao.png);
	}
}
</style>
