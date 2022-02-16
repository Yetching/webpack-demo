/* eslint-disable import/no-import-module-exports */
import './style.css';
import './input';

const addBlock = () => {
  const block = document.createElement('div');
  block.classList.add('block');
  document.body.appendChild(block);
};
const btn = document.createElement('button');

btn.innerText = '点击';

btn.addEventListener('click', () => {
  addBlock();
});

document.body.appendChild(btn);

// js模块设置hot为true也会重新加载页面我们使用下面的方法实现
// css模块是因为css-loader帮助我们实现了下面的函数
// vue和react自己做了处理

// Todo感觉很麻烦，不知道实践和可用性是啥

// 测试得知，当input模块改动时会重新执行一遍其内容

if (module.hot) {
  module.hot.accept('./input', () => {
    console.log('input模块有更改');
  });
}
