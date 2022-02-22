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
      energizeScore: strain.energizeScore || 0,
      description: strain.descriptionPlain,
    };
  }

  // fetch all strains with relevant data from v2 api
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

  // fetch strain by name from v1 api
  async getStrainByName(name) {
    const { hits } = await this.get(
      `search/v1?collapse=dispensary_id&filter[type]=menu_item&filter[product_category]=Flower&filter[unit]=g&lat=39.3486&lon=3.125&filter[all_strains]=true&skip=0&take=3`,
      {
        "filter[strain_name]": name,
      }
    );
    const { menuItem } = hits;
    const { strain } = menuItem[0]; // for now, only the first object in the response gets processed
    return this.strainReducer(strain);
  }
}

module.exports = LeaflyAPI;
