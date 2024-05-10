import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dsv from '@rollup/plugin-dsv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), dsv()],
	resolve: {
		alias: {
			'@': join(__dirname, 'src'),

			'@comp.layout': join(__dirname, 'src', 'components', 'layout'),
			'@comp.gcomp': join(__dirname, 'src', 'components', 'gcomp'),

			'@assets': join(__dirname, 'src', 'assets'),

			'@pages': join(__dirname, 'src', 'pages'),

			'@router': join(__dirname, 'src', 'router'),

			'@mixin.cl': join(__dirname, 'src', 'mixin', 'codinglist'),
		},
	},
	server: {
		host: true,
	},
	css: {
		devSourcemap: true,
		preprocessorOptions: {
			scss: {
				sourcemap: true,
				additionalData: `
          @import "@assets/styles/global/_setting.scss";
        `,
			},
		},
	},
});
