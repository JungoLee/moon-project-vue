<template>
	<header class="uid-header">
		<a href="#none" class="logo-uxgroup">
			<img :src="logo" alt="Logo" />
		</a>
		<ul class="utillity-menu">
			<li>
				<button class="tab-btn" type="button">HOME</button>
			</li>
			<li>
				<button class="tab-btn" type="button">ABOUT</button>
			</li>
			<li>
				<button class="tab-btn" type="button">WORK</button>
			</li>
		</ul>
	</header>
</template>

<script setup>
import logo from '@/assets/images/logo.png';
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
