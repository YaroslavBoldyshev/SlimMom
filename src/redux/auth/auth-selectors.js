export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUsername = state => state.auth.user.username;

export const getUserData = state => state.auth.user.userData;

export const getTodaySummary = state => state.auth.todaySummary;

export const isLoaded = state => state.isLoading;

export const getAccessToken = state => state.auth.accessToken;



const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUserData,
  getTodaySummary,
  getAccessToken,
};

export default authSelectors;
