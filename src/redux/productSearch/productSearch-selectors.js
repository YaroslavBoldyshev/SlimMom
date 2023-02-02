export const getProductSearch = state => state.productSearch.products;

export const getProductId = state => state.productSearch.products.map(product => {
  return {
    name: product.title.ua,
    id: product._id
  }
});
