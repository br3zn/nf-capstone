const { SQLDataSource } = require("datasource-sql");

const MINUTE = 60;

class BubatzDB extends SQLDataSource {
  async getTerps() {
    return this.knex
      .select("*")
      .from("terpenes")
      .where({ locale: "en" })
      .cache(MINUTE);
  }
}

module.exports = BubatzDB;
