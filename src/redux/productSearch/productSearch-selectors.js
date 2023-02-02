export const getProductSearch = state => state.productSearch.products;

export const getProductId = state => state.productSearch.products.map(product => {
  return {
    name: product.title.ru,
    id: product._id
  }
});
