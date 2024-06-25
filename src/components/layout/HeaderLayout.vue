<template>
	<header class="uid-header">
		<router-link to="/" class="logo-uxgroup">
			<img :src="logo" alt="Logo" />
		</router-link>
		<ul class="utillity-menu">
			<li>
				<button type="button" @click="$emit('changeContent', 0)" class="tab-btn font-os">
					HOME
				</button>
			</li>
			<li>
				<button type="button" @click="$emit('changeContent', 1)" class="tab-btn font-os">
					ABOUT
				</button>
			</li>
			<li>
				<button type="button" @click="$emit('changeContent', 2)" class="tab-btn font-os">
					WORK
				</button>
			</li>
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
	</header>
</template>

<script>
import logo from '@/assets/images/logo.png';

export default {
	data() {
		return {
			index: 1,
			logo: logo,
		};
	},
	methods: {},
};
</script>

<style lang="scss" scoped>
.uid-header {
	text-align: center;
	@include rem(font-size, 18);

	.logo-uxgroup {
		@include rem(padding, 24 0);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.utillity-menu {
		display: flex;
		justify-content: center;

		@include rem(padding, 12 0);
		@include rem(gap, 22);

		a {
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
	.tab-btn {
		color: #fff;
	}
}
</style>
