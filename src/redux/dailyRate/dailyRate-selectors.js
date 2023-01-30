export const getDailyRate = state => state.summaries.kcalConsumed;

export const getNotAllow = state => state.notAllowedProducts;

const dailyRateSelectors = {
  getDailyRate,
};

export default dailyRateSelectors;
