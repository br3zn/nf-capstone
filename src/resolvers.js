module.exports = {
  Query: {
    allStrains: async (_, { skip, take }, { dataSources }) => {
      return dataSources.leaflyAPI.getAllStrains(skip, take);
    },
  },
};
