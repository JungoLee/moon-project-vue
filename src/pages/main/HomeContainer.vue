<template>
	<div class="content-box home-container">
		<div class="content-text">
			<div class="swiper-container swiper-portpolio-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<button type="button" class="frame-box">
							<iframe
								id="player"
								src=""
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe>
						</button>
						<p class="option-title text-scale active">STANDARD</p>
						<p class="option-sub">
							라이브클립 (원테이크) / 100,000won <br />(로고 삽입 / 4K / 색 보정 / 촬영시간(분) :
							60분 ~ / 러닝타임(초) : 240초 / 작업일 : ~ 5일 / 수정 횟수 : 1회)
						</p>
						<p class="option-sub">(옵션 : 짐벌 / 조명 / B cam / 피부 보정)</p>
						<p class="option-price">750,000won</p>
					</div>
					<div class="swiper-slide">
						<button type="button" class="frame-box">
							<iframe
								src=""
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe>
						</button>
						<p class="option-title text-scale active">STANDARD</p>
						<p class="option-sub">
							라이브클립 (원테이크) / 100,000won <br />(로고 삽입 / 4K / 색 보정 / 촬영시간(분) :
							60분 ~ / 러닝타임(초) : 240초 / 작업일 : ~ 5일 / 수정 횟수 : 1회)
						</p>
						<p class="option-sub">(옵션 : 짐벌 / 조명 / B cam / 피부 보정)</p>
						<p class="option-price">750,000won</p>
					</div>
					<div class="swiper-slide">
						<button type="button" class="frame-box">
							<iframe
								src=""
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe>
						</button>
						<p class="option-title text-scale active">STANDARD</p>
						<p class="option-sub">
							라이브클립 (원테이크) / 100,000won <br />(로고 삽입 / 4K / 색 보정 / 촬영시간(분) :
							60분 ~ / 러닝타임(초) : 240초 / 작업일 : ~ 5일 / 수정 횟수 : 1회)
						</p>
						<p class="option-sub">(옵션 : 짐벌 / 조명 / B cam / 피부 보정)</p>
						<p class="option-price">750,000won</p>
					</div>
				</div>
				<button type="button" class="swiper-button-next"></button>
				<button type="button" class="swiper-button-prev"></button>
			</div>
		</div>
	</div>
</template>

<script setup>
import Swiper from 'swiper';

new Swiper('.swiper-portpolio-container', {
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const textScale = document.querySelectorAll('.text-scale');

textScale.forEach((item) => {
	item.classList.add('active');
});

setTimeout(() => {
	textScale.forEach((item) => {
		item.classList.remove('active');
	});
}, 3000);
</script>

<style lang="scss" scoped>
.home-container {
	width: 100%;
	@include rem(padding-top, 24);

	iframe {
		width: 100%;
		height: 100%;
	}
	.swiper-slide {
		position: relative;
	}
	.frame-box {
		@include rem(height, 50vh);
		width: 100%;
	}
	.option-title {
		@include rem(font-size, 24);
		@include rem(margin-top, 12);
	}
	.option-sub {
		@include rem(margin-top, 12);
		@include rem(font-size, 14);
	}
	.option-price {
		@include rem(margin-top, 8);
		@include rem(font-size, 16);
	}
	.swiper-button-next,
	.swiper-button-prev {
		@include rem(width, 50);
		height: 100%;
		position: absolute;
		top: 0;
		z-index: 2;
		&::before,
		&::after {
			content: '';
			position: absolute;
			@include rem(width, 20);
			@include rem(height, 2);
			background-color: #fff;
			left: calc(50% - 1rem);
		}
	}
	.swiper-button-next {
		left: 0;
		background: linear-gradient(
			to right,
			rgba(0, 0, 0, 1) 0%,
			rgba(2, 2, 2, 1) 1%,
			rgba(229, 229, 229, 0) 100%
		);

		&::before {
			transform: rotate(-45deg);
			top: calc(50% - 6.5px);
		}
		&::after {
			transform: rotate(45deg);
			top: calc(50% + 6.5px);
		}
	}
	.swiper-button-prev {
		right: 0;
		background: linear-gradient(to right, rgba(229, 229, 229, 0) 0%, rgba(0, 0, 0, 1) 100%);

		&::before {
			transform: rotate(45deg);
			top: calc(50% - 6.5px);
		}
		&::after {
			transform: rotate(-45deg);
			top: calc(50% + 6.5px);
		}
	}
	.text-scale {
		display: flex;
		opacity: 0;
	}

	.split {
		will-change: transform;
	}
}
</style>
