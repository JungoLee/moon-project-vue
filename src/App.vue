<template>
	<LayoutContainer></LayoutContainer>
</template>

<script>
import LayoutContainer from '@pages/common/LayoutContainer.vue';
import { onMounted } from 'vue';
// import { google } from 'googleapis';

export default {
	components: {
		LayoutContainer,
	},

	mounted() {
		// console.log(google);
		// this.fetchSheetData();
	},
	methods: {
		// async fetchSheetData() {
		//   try {
		//     const auth = await this.getAuth();
		//     const sheets = google.sheets({ version: 'v4', auth });
		//     const response = await sheets.spreadsheets.values.get({
		//       spreadsheetId: '1Rk_BNb_rXv3Qq9_logmdwcaBv-S7g0c6zH0D8Q_0Qx8',
		//       range: 'Sheet1!A1:B100',
		//     });
		//     this.sheetData = response.data.values.map((row) => ({
		//       name: row[0],
		//       age: row[1],
		//     }));
		//   } catch (error) {
		//     console.error('Error fetching sheet data:', error);
		//   }
		// }
	},
};
</script>

<style scoped lang="scss"></style>
<style lang="scss">
html {
	text-size-adjust: 100%;
	font-size: $global-font-size;
	font-weight: 400;
	@include languages();
}
html,
body {
	overflow-y: auto;
	overflow-x: hidden;
	height: 100%;
	color: $global-font-color;
	background-color: $global-background-color;
}
</style>
