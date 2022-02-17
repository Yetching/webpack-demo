console.log('hello webpack');

// 判断浏览器是否支持
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('/service-worker.js')
//       .then((registration) => {
//         console.log('SW 注册成功: ', registration);
//       })
//       .catch((error) => {
//         console.log('SW 注册失败: ', error);
//       });
//   });
// }

const newArr = Array.from([1, 2, 3, 4], (x) => {
  return x * x;
});

console.log(newArr);
