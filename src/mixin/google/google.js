// spreadsheetMixin.js
export default {
	methods: {
		getDataJson(callback) {
			const scope = this;
			google.charts.load('current', { packages: ['corechart'] }).then(() => {
				let query = new google.visualization.Query(
					'https://docs.google.com/spreadsheets/d/1Rk_BNb_rXv3Qq9_logmdwcaBv-S7g0c6zH0D8Q_0Qx8/edit?gid=0#gid=0',
				);
				query.send((response) => {
					if (response.isError()) {
						console.error(
							'Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage(),
						);
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
						rows = rows.map((row) => {
							if (row.options) {
								row.options = row.options.split('\n');
							}
							if (row.price) {
								row.price = row.price.split('\n').map((price) => parseFloat(price.trim()));
							}

							if (row.images) {
								// 사용 예시
								const driveUrl = row.images;
								const thumbnailUrl = scope.getImage(driveUrl);
								row.images = thumbnailUrl;
							}
							return row;
						});
						if (callback) {
							callback(rows);
						}
					}
				});
			});
		},
		getImage(driveUrl) {
			// Google Drive 파일 URL에서 파일 ID를 추출하기 위한 정규 표현식
			const regex = /\/d\/(.+?)\//;
			const match = driveUrl.match(regex);

			// 정규 표현식을 통해 파일 ID 추출
			if (match && match[1]) {
				const fileId = match[1];

				// 새로운 URL 형식에 파일 ID 삽입
				const thumbnailUrl = 'https://drive.google.com/thumbnail?id=' + fileId + '&sz=w1000';
				return thumbnailUrl;
			} else {
				// 파일 ID를 찾을 수 없는 경우, 오류 메시지 반환
				return 'Invalid Google Drive URL';
			}
		},
	},
};
