<template>
	<div class="content-box home-container">
		<div class="content-text">
			<swiper :options="swiperOptions">
				<swiper-slide v-for="(item, index) in dataList" :key="index">
					<a :href="item.href" class="frame-box" target="_blank">
						<img :src="item.image" alt="" />
					</a>
					<div class="information-box">
						<p class="option-title text-scale active font-os">
							<span
								class="option-title text-scale active font-os"
								v-for="(word, index) in item.title.split('')"
								:key="`title-${index}`"
							>
								{{ word }}
							</span>
						</p>
						<p class="option-sub">
							<span v-for="(subItem, subIndex) in item.sub" :key="`sub-${subIndex}`">
								{{ subItem }}
							</span>
						</p>
						<p class="desc-sup">옵션</p>
						<p class="option-sub flex">
							<span
								class="badge"
								v-for="(optionValue, optionKey) in item.option"
								:key="`option-${optionKey}`"
							>
								{{ optionValue }}
							</span>
						</p>
						<p class="option-price">{{ item.price }}</p>
					</div>
				</swiper-slide>
				<div class="swiper-button-next" @click="onEvent" @slot="button - next"></div>
				<div class="swiper-button-prev" @slot="button - prev"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	data() {
		return {
			dataList: [
				{
					href: 'https://www.youtube.com/embed/Zu82KK-Y_Yc?si=ETs5yr3fydJZeHFb',
					image: '/src/assets/images/thumbnail01.jpg',
					title: 'STANDARD',
					sub: {
						name: '라이브클립 (원테이크) / ',
						price: '100,000won',
					},
					option: [
						'로고 삽입',
						'4K',
						'색 보정',
						'촬영시간(분) : 60분 ~',
						' 러닝타임(초) : 240초',
						'작업일 : ~5일',
						'수정 횟수 : 1회',
					],
					price: '750,000won',
				},
				{
					href: 'https://www.youtube.com/embed/WtirSK5ZqMU?si=tluN1ec87yRBVwKz',
					image: '/src/assets/images/thumbnail02.jpg',
					title: 'DELUXE',
					sub: {
						name: '라이브클립 (원테이크) / ',
						price: '100,000won',
					},
					option: [
						'로고 삽입',
						'4K',
						'색 보정',
						'촬영시간(분) : 60분 ~',
						' 러닝타임(초) : 240초',
						'작업일 : ~5일',
						'수정 횟수 : 1회',
					],
					price: '750,000won',
				},
				{
					href: 'https://www.youtube.com/embed/J4ZT_KwqArY?si=vpM6ApOOnYLczpOq',
					image: '/src/assets/images/thumbnail03.jpg',
					title: 'PREMIUM',
					sub: {
						name: '라이브클립 (원테이크) / ',
						price: '100,000won',
					},
					option: [
						'로고 삽입',
						'4K',
						'색 보정',
						'촬영시간(분) : 60분 ~',
						' 러닝타임(초) : 240초',
						'작업일 : ~5일',
						'수정 횟수 : 1회',
					],
					price: '750,000won',
				},
				// 다른 슬라이드 데이터를 추가합니다.
			],
			swiperOptions: {
				loop: true,
				spaceBetween: 24,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			},
		};
	},
	mounted() {
		this.$nextTick(() => {
			const textScale = document.querySelector('.swiper-slide-active');
			textScale.classList.add('active');
		});
		// this.gsap.to(this.$el, { duration: 1, x: 100 });
	},
	methods: {
		onEvent() {
			console.log('??');
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
		@include rem(height, 50vh);
		width: 100%;
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
		height: 57.3%;
		position: absolute;
		top: 0;
		z-index: 2;
		color: #fff;
		margin-top: 0;
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
