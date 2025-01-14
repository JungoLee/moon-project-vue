// spreadsheetMixin.js
export default {
	methods: {
		getDataJson(callback) {
			google.charts.load('current', { packages: ['corechart'] }).then(() => {
				this.sendQuery(3, callback); // 첫 번째 인자는 재시도 횟수를 나타냄
			});
		},
		sendQuery(retryCount, callback) {
			const scope = this;

			let query = new google.visualization.Query(
				'https://docs.google.com/spreadsheets/d/1Rk_BNb_rXv3Qq9_logmdwcaBv-S7g0c6zH0D8Q_0Qx8/edit?gid=0#gid=0',
			);
			query.send((response) => {
				if (response.isError()) {
					console.error(
						'Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage(),
					);
					// 재시도 횟수가 3번 미만인 경우 재시도
					if (retryCount < 3) {
						console.log(`Retrying... Attempt ${retryCount + 1}`);
						scope.sendQuery(retryCount + 1, callback);
					}
					return;
				}

				let dataTable = response.getDataTable().toJSON();
				let jsonData = JSON.parse(dataTable);

				if (jsonData.rows.length > 0) {
					const keys = jsonData.rows[0].c.map((cell) => cell.v);
					let rows = jsonData.rows.slice(1).map((row) => {
						let newRow = {};
						row.c.forEach((cell, index) => {
							newRow[keys[index]] = cell.v;
						});
						return newRow;
					});

					// 이미지 로드를 위한 Promise 배열 생성
					let imageLoadPromises = [];

					rows = rows.map((row) => {
						if (row.options) {
							row.options = row.options.split('\n');
						}
						if (row.price) {
							row.price = row.price.split('\n').map((price) => parseFloat(price.trim()));
						}

						if (row.images) {
							const driveUrl = row.images;
							// 이미지 로드 Promise 추가
							const imageLoadPromise = scope.getImage(driveUrl).then((thumbnailUrl) => {
								row.images = thumbnailUrl;
							});
							imageLoadPromises.push(imageLoadPromise);
						}
						return row;
					});

					// 모든 이미지 로드가 완료된 후 콜백 호출
					Promise.all(imageLoadPromises).then(() => {
						if (callback) {
							callback(rows);
						}
					});
				}
			});
		},
		getImage(driveUrl) {
			return new Promise((resolve, reject) => {
				// Google Drive 파일 URL에서 파일 ID를 추출하기 위한 정규 표현식
				const regex = /\/d\/(.+?)\//;
				const match = driveUrl.match(regex);
				if (match && match[1]) {
					const fileId = match[1];
					// 예시: Google Drive API를 사용하여 썸네일 URL을 가져오는 로직
					// 이 부분은 실제 API 호출 코드로 대체해야 합니다.
					const thumbnailUrl = 'https://drive.google.com/thumbnail?id=' + fileId + '&sz=w1000';
					resolve(thumbnailUrl);
				} else {
					reject(new Error('Invalid Google Drive URL'));
				}
			});
		},
	},
};
