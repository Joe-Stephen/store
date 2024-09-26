const productsArray = [
  { id: 1, title: "Coffee", price: 4.99 },
  { id: 2, title: "Sunglasses", price: 9.99 },
  { id: 3, title: "Camera", price: 39.99 },
];

const getProductWithId = (id) => {
  const productFound = productsArray.find((product) => product.id === id);
  return productFound ? productFound : null;
};

export { productsArray, getProductWithId };
