<template>
	<ul class="utillity-menu">
		<li>
			<button
				type="button"
				@click="$emit('setIndex', 0)"
				:class="{ 'tab-btn': true, 'font-os': true, on: index === 0 }"
			>
				HOME
			</button>
		</li>
		<!-- <li>
			<button
				type="button"
				@click="$emit('setIndex', 1)"
				:class="{ 'tab-btn': true, 'font-os': true, on: index === 1 }"
			>
				ABOUT
			</button>
		</li>
		<li>
			<button
				type="button"
				@click="$emit('setIndex', 2)"
				:class="{ 'tab-btn': true, 'font-os': true, on: index === 2 }"
			>
				WORK
			</button>
		</li> -->
		<!-- <li>
				<router-link to="/" class="tab-btn font-os" active-class="on">HOME</router-link>
			</li>
			<li>
				<router-link to="/about" class="tab-btn font-os" active-class="on">ABOUT</router-link>
			</li>
			<li>
				<router-link to="/work" class="tab-btn font-os" active-class="on">WORK</router-link>
			</li> -->
	</ul>
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
.utillity-menu {
	display: flex;
	justify-content: center;

	@include rem(padding, 12 0);
	@include rem(gap, 22);
	@include rem(font-size, 18);

	.tab-btn {
		color: #fff;
		position: relative;
		font-weight: 100;
		letter-spacing: 1px;

		&:hover,
		&.on {
			&::before {
				width: 100%;
				left: 0;
			}
		}

		&::before {
			content: '';
			width: 0;
			@include rem(height, 2);
			background-color: #fff;
			position: absolute;
			bottom: 0;
			left: 50%;
			transition:
				left 0.2s ease-out,
				width 0.2s ease-out;
		}
	}
}
</style>
