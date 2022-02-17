const { add } = require('@/math.js');

function Header() {
  const value = add(4, 5);
  return `<Header>${value}</Header>`;
}

export default Header;
