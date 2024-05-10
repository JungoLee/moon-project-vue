import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const appRoutesPath = join(__dirname, 'src', 'router', 'appRoutes.js');
let appRoutes;

// Vue 파일 템플릿
const vueFileTemplate = (fileName) => `<template>
	<div class="${fileName}-page-container">${fileName}</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
`;

// 파일 생성 함수
const createVueFile = async (comp) => {
	const filePath = join(__dirname, 'src', 'pages', comp.path + '.vue');
	try {
		await fs.access(filePath);
	} catch (error) {
		console.error(error);
		try {
			// 파일이 존재하지 않으면 생성
			await fs.writeFile(filePath, vueFileTemplate(comp.name));
		} catch (writeError) {
			console.error(writeError);
		}
	}
};

// 파일이 존재하는지 확인
try {
	await fs.access(appRoutesPath);

	// 파일이 이미 존재할 경우 불러옴
	const appRoutesModule = await import(`file://${appRoutesPath}`);
	appRoutes = appRoutesModule.default || appRoutesModule;

	// 각 라우트에 대해 파일 생성
	appRoutes.forEach((route) => {
		createVueFile(route);
		if (route.children) {
			route.children.forEach((childrenRoute) => {
				createVueFile(childrenRoute);
			});
		}
	});
} catch (error) {
	// 파일이 존재하지 않을 경우 생성
	console.error(error);
}
