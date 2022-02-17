module.exports = {
  // 第一个是自动兼容加前缀
  // 第二个是可以在css中使用嵌套语法
  plugins: [require('autoprefixer'), require('postcss-nested')],
};
