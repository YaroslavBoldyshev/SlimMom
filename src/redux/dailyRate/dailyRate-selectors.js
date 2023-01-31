export const getDailyRate = state => state.summaries;


export const getNotAllow = state => state.notAllowedProducts;

export const isProductLoading = state => state.isLoading;

const dailyRateSelectors = {
  getDailyRate,
};

export default dailyRateSelectors;
