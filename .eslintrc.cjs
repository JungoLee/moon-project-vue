/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'plugin:vue/vue3-recommended', // 또는 'plugin:vue/recommended'
		'eslint:recommended',
		'@vue/eslint-config-prettier/skip-formatting',
	],
	parserOptions: {
		ecmaVersion: '2022',
		sourceType: 'module',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-implicit-any': 'off',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				indent: ['error', 2],
				'arrow-parens': ['warn', 'as-needed'],
				'linebreak-style': 0,
				'import/no-unresolved': 'off',
				'vue/require-default-prop': 'off',
				'vue/multi-word-component-names': 'off',
				'vue/no-v-html': 'off',
				'import/newline-after-import': 'off',
				// allow debugger during development
				'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
				'no-mixed-spaces-and-tabs': 'off',
				'no-irregular-whitespace': 'off',
				'no-alert': 'off',
				'no-console': 'off',
				'import/no-extraneous-dependencies': 'off',
				'no-unset-vars': 'off',
				'no-param-reassign': 'off',
				'max-len': ['error', { code: 2000 }],
				'no-restricted-globals': ['error', 'event', 'fdescribe'],
				'no-underscore-dangle': 'off',
				'global-require': 'off',
				'no-useless-escape': 'off',
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 100,
				bracketSpacing: true,
				arrowParens: 'always',
				endOfLine: 'auto',
			},
		],
	},
	globals: {
		ref: true,
		mounted: true,
		watch: true,
		nextTick: true,
		require: true,
		__dirname: true,
		$router: true,
	},
};
