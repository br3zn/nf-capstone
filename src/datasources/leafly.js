const { RESTDataSource } = require("apollo-datasource-rest");
import map from "lodash/map";

// only fetch strains with required data
const withDataFilterQuery = `
filter[thc][0][lte]=0.0
&filter[thc][1][gte]=1.0
&filter[thc][1][lte]=10.0
&filter[thc][2][gte]=10.0
&filter[thc][2][lte]=20.0
&filter[thc][3][gte]=20.0
&filter[strain_top_terp][]=caryophyllene
&filter[strain_top_terp][]=humulene
&filter[strain_top_terp][]=limonene
&filter[strain_top_terp][]=linalool
&filter[strain_top_terp][]=myrcene
&filter[strain_top_terp][]=ocimene
&filter[strain_top_terp][]=pinene
`;

class LeaflyAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://consumer-api.leafly.com/api/";
  }

  // map fetched data into our defined schema
  strainReducer(strain) {
    return {
      leaflyId: strain.id || 0,
      name: strain.name,
      flowerSvg: strain.flowerImageSvg,
      terpTop: strain.strainTopTerp || "no data",
      thc: strain.thc || 0,
      terps: map(strain.terps) || [],
    };
  }

  async getAllStrains(skip = 0, take = 10) {
    const { hits } = await this.get(
      `strain_playlists/v2?${withDataFilterQuery}`,
      {
        skip: skip,
        take: take,
      }
    );
    const res = hits.strain;
    return Array.isArray(res)
      ? res.map(strain => this.strainReducer(strain))
      : [];
  }
}

module.exports = LeaflyAPI;
