module.exports = {
  Query: {
    allStrains: async (_, { skip, take }, { dataSources }) => {
      return dataSources.leaflyAPI.getAllStrains(skip, take);
    },
    getStrainByName: async (_, { name }, { dataSources }) => {
      return dataSources.leaflyAPI.getStrainByName(name);
    },
    getAllTerps: async (_, __, { dataSources }) => {
      return dataSources.bubatzDB.getAllTerps();
    },
    getTerpById: async (_, { id }, { dataSources }) => {
      return dataSources.bubatzDB.getTerpById(id);
    },
  },
};
