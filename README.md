# vue-project

> 이 템플릿은 Vue 3 개발을 시작하기 위한 것으로 Vite를 사용합니다.

## 추천 IDE 설정

> 최적의 개발 환경을 위해 [VSCode](https://code.visualstudio.com/)를 사용합니다.

> VSCode 필수 Extensions

- Vetur : _Vue.js 개발을 위한 공식 확장 프로그램으로, Vue 파일 및 Vue 코드에 대한 강력한 지원을 제공합니다. 코드 하이라이팅, 코드 스니펫, IntelliSense 등을 포함하고 있습니다._
- ESLint : _JavaScript 코드에 대한 문법 검사와 스타일 가이드 준수를 도와주는 도구입니다. Vue.js 프로젝트에서도 사용할 수 있습니다._
- Prettier - Code formatte : _코드 포맷팅을 자동으로 수행해주는 도구로, Vue.js와 JavaScript 코드의 일관된 스타일을 유지하도록 도와줍니다._

## 설정 사용자화

> 사용자 정의 옵션에 대한 자세한 내용은 [Vite Configuration Reference](https://vitejs.dev/config/)를 참조하세요.

## 프로젝트 설정

> 프로젝트를 실행하기 전에 Node.js가 설치되어 있는지 확인하세요. 만약 설치되어 있지 않다면 [공식 사이트](https://nodejs.org/)에서 최신 버전으로 설치해야 합니다.

```shell
// 다음 명령어로 Node.js 버전을 확인합니다: lastest ( 최소 16버전 이상 ) 사용합니다 ( 설치당시 v : 16.14.2 )
node -v

// 개발용 컴파일 및 핫-리로드, 프로젝트 의존성을 설치합니다:
npm install

// 이 명령어를 실행하면 개발 서버가 시작되며, 프로젝트를 웹 브라우저에서 미리 볼 수 있습니다.
npm run dev

// ESLint를 사용한 코드 린트
npm run lint

// appRoutes.js 에 배열로 들어온 pages/...routes.js 중 없는 페이지를 자동으로 만들어 줍니다.
// router-build 할때 const import 는 중요하지 않습니다 path만 보기에 경로가 정확해야합니다.
// vue 특성상  path가 location 다를수 있어서 build 할때는 잠시 path를 정확히 하고 지우는 방법이 있습니다.
npm run router-build
```

## VSCode 설정

> 일관된 코드 스타일을 유지하기 위해 다음 설정을 VSCode의 settings.json 파일에 추가하세요:

```json
{
	"eslint.validate": [
		"javascript",
		"javascriptreact",
		"typescript",
		"typescriptreact",
		"vue",
		"markdown",
		"json",
	],
	"editor.tabSize": 2,
	"prettier.tabWidth": 2,
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true,
		"source.fixAll": true
	},
	"editor.formatOnSave": true
}
```

이러한 설정을 추가하면 코드 저장 시에 VSCode가 ESLint를 사용하여 코드를 자동으로 포맷하고 오류를 수정합니다.

## CodingList 설정

> CodingList는 CSV(CodingCSVList) 와 Routes(CodingListRoutesList)를 나누어 사용합니다.

**코딩 리스트전환은 HomeIndex.vue 에서 goCodingList(true(CSV) || false(Routes)) 로 전환 가능합니다. **

## CodingList (Routes 규칙)

> meta 객체 에 codinglistData 객체로 사용합니다.

```js
codinglistData: {
  category: '회원가입', // 필수** 그룹을 도와줍니다.
  depth1: '로그인', // depth1 ~ n
  status: '진행중', // 진행중 또는 완료 두가지로 나눠집니다.
  'script-status': '', // 해당 페이지에 스크립트 유무 입니다.
  'done-d': '', // 완료된 날짜입니다.
  'modify-d': [''], // 수정된 날짜입니다. 배열 작성필수**
  etc: [''], // 비고란입니다. 배열 작성필수**
},
```
