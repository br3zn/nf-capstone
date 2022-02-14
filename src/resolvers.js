module.exports = {
  Query: {
    strains: async (_, { skip, take }, { dataSources }) => {
      return dataSources.leaflyAPI.getAllStrains(skip, take);
    },
  },
};
