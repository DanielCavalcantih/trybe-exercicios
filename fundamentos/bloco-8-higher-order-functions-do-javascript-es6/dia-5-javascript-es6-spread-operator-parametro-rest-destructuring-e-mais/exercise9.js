const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const yearMonths = ({ spring, summer, autumn, winter }) => {
  return [...spring, ...summer, ...autumn, ...winter];
};

console.log(yearMonths(yearSeasons));

const products = [
  {
    name: 'laptop',
    price: 1000,
    id: 3,
  },
  {
    name: 'desktop',
    price: 1500,
    id: 2,
  },
  {
    name: 'phone',
    price: 500,
    id: 1,
  },
];

console.log(products.sort());
