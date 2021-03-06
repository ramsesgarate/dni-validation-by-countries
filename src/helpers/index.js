const module11 = (idNumber) => {
  let rest = idNumber.split("").map(Number).reverse();
  let total = rest.reduce(
    (acc, cur, index) => acc + cur * (2 + (index % 6)),
    0
  );

  return 11 - (total % 11);
};

module.exports = {
  module11,
};
