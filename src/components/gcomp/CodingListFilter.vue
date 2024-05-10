<template>
	<div ref="searchBox" class="search-box-wrapper" @click.stop>
		<button class="btn" type="button" @click.stop="eventSearchClick">검색하기</button>

		<div v-if="buttonOnOff" class="search-box">
			<input ref="searchInput" class="search-input" type="text" @keyup.enter="searchEnter" />
			<div class="search-lists">
				<template v-for="(item, index) in headers">
					<label
						v-if="item !== 'No' && item !== 'category'"
						:key="index"
						:for="'checkbox0' + index"
						name="checkbox-group"
					>
						<input
							:id="'checkbox0' + index"
							type="checkbox"
							:checked="filters[item]"
							@change="addFilter($event, item)"
						/>
						<span class="txt">{{ item }}</span>
					</label>
				</template>
			</div>
		</div>
	</div>
	<button class="btn color-f" type="button" @click.stop="reset">리셋</button>
	<a class="btn" href="/component-index">Component Guide</a>
</template>

<script setup>
// !!! 코딩리스트 필터 함수 추가하기
// prop 정의
const { parent, headers } = defineProps({
	parent: { type: Object, required: true },
	headers: { type: Array, required: true },
});

const filters = JSON.parse(localStorage.getItem('filters'))
	? ref(JSON.parse(localStorage.getItem('filters')))
	: ref({});
const buttonOnOff = ref(false);

const filterList = ref([]);
const searchInput = ref(null);
const searchBox = ref(null);
Object.entries(filters.value).forEach(($this) => {
	if ($this[1]) {
		filterList.value.push('.' + $this[0]);
	}
});
// --- 검색 실행하기
function searchEnter(key) {
	if (key.key === 'Enter' || key.pointerType === 'mouse') {
		let isNoResult = true;
		if (!filterList.value.length) {
			reset();
			return;
		}

		parent.querySelectorAll('tr:not(thead tr)').forEach((el) => {
			const trEl = el;
			trEl.style.display = 'none';
		});
		parent.querySelectorAll('.cl-table-content').forEach((el) => {
			const trEl = el;
			trEl.style.display = 'none';
		});
		const classLists = filterList.value.join(', ');
		parent.querySelectorAll(classLists).forEach((el) => {
			const textEa = el;
			if (textEa.textContent.indexOf(searchInput.value.value) !== -1) {
				if (textEa.textContent.indexOf('완료') !== -1 && textEa.textContent.indexOf(' ') !== -1)
					return;
				parent.querySelector(
					'tr.category[data-category=' + textEa.dataset.category + ']',
				).style.display = '';
				textEa.closest('tr').style.display = '';
				isNoResult = false;
			}
		});
		if (isNoResult) {
			reset();
		}
	}
}
// --- 검색 리셋하기
function reset() {
	parent.querySelectorAll('tr:not(thead tr)').forEach((el) => {
		const trEl = el;
		trEl.style.display = '';
	});
	parent.querySelectorAll('tr').forEach((el) => {
		const trEl = el;
		trEl.style.display = '';
	});
	if (searchInput.value) {
		searchInput.value.value = '';
	}
	for (const item in filters.value) {
		filters.value[item] = false;
	}
	buttonOnOff.value = false;
	filterList.value = [];
}

// --- 검색 필터 추가하기
function addFilter($event, item) {
	let className = item.toLowerCase();

	if ($event.target.checked) {
		filterList.value.push('.' + className);
	} else {
		filterList.value.pop('.' + className);
	}
	filters.value[className] = $event.target.checked;

	window.localStorage.setItem('filters', JSON.stringify(filters.value));
}

function eventSearchClick() {
	// 검색하기 버튼
	buttonOnOff.value = !buttonOnOff.value;
	if (buttonOnOff.value) {
		nextTick(() => {
			searchInput.value.focus();
		});
	}
}
defineExpose({
	buttonOnOff,
});
</script>

<style lang="scss" scoped>
@import '@assets/styles/global/codinglist.scss';
</style>
