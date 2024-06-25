<template>
	<div class="content-box home-container">
		<div class="content-text">
			<div class="swiper-container swiper-portpolio-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(item, index) in dataList" :key="index">
						<a :href="item.link" class="frame-box" target="_blank">
							<img :src="item.images" alt="" />
						</a>
						<div class="information-box">
							<p class="option-title text-scale font-os">
								<span v-for="(word, index) in item.product.split('')" :key="`title-${index}`">
									{{ word }}
								</span>
							</p>
							<p class="option-sub">
								<span>{{ item.name }}</span> /
								<span class="font-os">{{ item.basePrice }}</span>
							</p>
							<p class="desc-sup">옵션</p>
							<p class="option-sub flex">
								<span
									class="badge"
									v-for="(optionValue, optionKey) in item.options"
									:key="`option-${optionKey}`"
								>
									{{ optionValue }}
								</span>
							</p>

							<p class="option-price font-os">{{ item.totalPrice }}</p>
						</div>
					</div>
				</div>
				<button
					type="button"
					@click="slideNext"
					class="swiper-button-next"
					:style="{ height: buttonHeight + 'px' }"
				></button>
				<button
					type="button"
					@click="slidePrev"
					class="swiper-button-prev"
					:style="{ height: buttonHeight + 'px' }"
				></button>
			</div>
		</div>
	</div>
</template>

<script>
import Swiper from 'swiper';
import spreadsheetMixin from '@/mixin/google/google';

export default {
	mixins: [spreadsheetMixin],
	data() {
		return {
			buttonHeight: 0, // 초기 버튼 높이 설정
			dataList: [],
			swiper: null,
		};
	},
	mounted() {
		const gsap = this.gsap;
		const easing = 'back.out(1.7)';
		const duration = 0.5;
		const scope = this;
		scope.getDataJson((rows) => {
			scope.dataList = rows;
			scope.$nextTick(() => {
				scope.swiper = new Swiper('.swiper-portpolio-container', {
					loop: true,
					spaceBetween: 24,
					navigation: {
						nextEl: '.swiper-portpolio-container .swiper-button-next',
						prevEl: '.swiper-portpolio-container .swiper-button-prev',
					},
				});

				gsap.to('.swiper-slide-active .option-title span', duration, {
					y: 0,
					stagger: 0.05,
					overwrite: true,
					ease: easing,
				});

				this.swiper.on('slideChangeTransitionEnd', function () {
					gsap.to('.swiper-slide .option-title span', duration, {
						y: '100%',
						overwrite: true,
						ease: easing,
					});
					gsap.to('.swiper-slide-active .option-title span', duration, {
						y: 0,
						stagger: 0.05,
						overwrite: true,
						ease: easing,
					});
				});
				this.adjustButtonHeight();
				window.addEventListener('resize', this.adjustButtonHeight); // 윈도우 크기 조정 시 높이 조정
			});
		});
	},
	methods: {
		slideNext() {
			this.swiper.slideNext();
		},
		slidePrev() {
			this.swiper.slidePrev();
		},
		adjustButtonHeight() {
			const informationBox = document.querySelector('.frame-box'); // .information-box 요소 선택
			if (informationBox) {
				this.buttonHeight = informationBox.offsetHeight; // .information-box의 높이를 버튼 높이로 설정
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.home-container {
	width: 100%;
	@include rem(padding-top, 24);
	.swiper-container {
		position: relative;
	}
	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
	iframe {
		width: 100%;
		height: 100%;
	}
	.swiper-slide {
		position: relative;
	}
	.badge {
		@include rem(padding, 4 8);
		@include rem(border-radius, 8);
		border: 1px solid #fff;
		display: inline-block;
	}
	.desc-sup {
		@include rem(font-size, 24);
		@include rem(margin-top, 12);
	}
	.frame-box {
		padding-top: 56%;
		width: 100%;
		display: block;
		position: relative;
		overflow: hidden;
		img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
	.information-box {
		@include rem(padding, 0 20);
	}
	.option-title {
		@include rem(font-size, 24);
		@include rem(margin-top, 12);
	}
	.option-sub {
		@include rem(margin-top, 12);
		@include rem(font-size, 16);
		&.flex {
			display: flex;
			@include rem(gap, 8);
			flex-wrap: wrap;
		}
	}
	.option-price {
		@include rem(margin-top, 20);
		@include rem(font-size, 24);
		text-align: right;
	}
	.swiper-button-next,
	.swiper-button-prev {
		@include rem(width, 50);
		height: 56%;
		position: absolute;
		top: 0;
		z-index: 2;
		color: #fff;
		margin-top: 0;
		&::after {
			@include rem(font-size, 24);
		}
	}
	.swiper-button-next {
		right: 0;
		background: linear-gradient(
			to left,
			rgba(0, 0, 0, 1) 0%,
			rgba(2, 2, 2, 1) 1%,
			rgba(229, 229, 229, 0) 100%
		);
	}
	.swiper-button-prev {
		left: 0;
		background: linear-gradient(to left, rgba(229, 229, 229, 0) 0%, rgba(0, 0, 0, 1) 100%);
	}
	.text-scale {
		display: flex;
		overflow: hidden;
		span {
			position: relative;
			transform: translateY(100%);
		}
	}

	.split {
		will-change: transform;
	}
}
</style>
