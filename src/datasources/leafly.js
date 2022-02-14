const { RESTDataSource } = require("apollo-datasource-rest");

class LeaflyAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://consumer-api.leafly.com/api/";
  }

  strainReducer(strain) {
    return {
      id: strain.id || 0,
      name: strain.name,
      flowerSvg: strain.flowerImageSvg,
      terpTop: strain.strainTopTerp || "no data",
      thc: strain.thc || 0,
      cbd: strain.cbd || 0,
    };
  }

  async getAllStrains(skip = 0, take = 10) {
    const { hits } = await this.get("strain_playlists/v2", {
      skip: skip,
      take: take,
    });
    const res = hits.strain;
    return Array.isArray(res)
      ? res.map(strain => this.strainReducer(strain))
      : [];
  }
}

module.exports = LeaflyAPI;
