import { add, minus } from './math';

console.log(add(4, 5));

// 三方模块
// import 'lodash';

// 没使用但是会打包
// 比如引入css模块等，只是引入并未使用，不会进行tree-shaking
// 可通过配置package.json的sideEffects来自定义tree-shaking

import './style.css';
