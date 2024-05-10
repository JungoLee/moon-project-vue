const getTotalPage = ($categorys) => {
	let total = $categorys.length;
	$categorys.forEach(($this) => {
		const status = $this['status'] ? $this['status'] : $this?.meta?.codinglistData['status'];
		const isHasDash = status?.trim() === '-';

		if (isHasDash) {
			total -= 1;
		}
	});
	return total;
};

const isWorkingStatus = ($status) =>
	$status?.trim() !== '-' &&
	$status?.trim() !== '완료' &&
	$status?.trim() !== null &&
	$status?.trim() !== undefined &&
	$status?.trim() !== '';

const getTotalWorking = ($categorys) => {
	let total = 0;

	$categorys.forEach(($this) => {
		const status = $this['status'] ? $this['status'] : $this?.meta?.codinglistData['status'];
		if (isWorkingStatus(status)) {
			total += 1;
		}
	});
	return total;
};
const getDonePage = ($categorys) => {
	let total = 0;
	$categorys.forEach(($this) => {
		const status = $this['status'] ? $this['status'] : $this?.meta?.codinglistData['status'];
		const isDone = status?.trim() === '완료';

		if (isDone) {
			total += 1;
		}
	});
	return total;
};
const getDonePercent = ($categorys) => {
	const total = getTotalPage($categorys);
	const done = getDonePage($categorys);
	const result = (done / total) * 100;
	return Math.ceil(result);
};

export { getTotalPage, getTotalWorking, getDonePage, getDonePercent };
