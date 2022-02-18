const { SQLDataSource } = require("datasource-sql");

const MINUTE = 60;

class BubatzDB extends SQLDataSource {
  async getAllTerps() {
    return this.knex
      .select("*")
      .from("terpenes")
      .where({ locale: "en" })
      .cache(MINUTE);
  }
  async getTerpById(id) {
    return this.knex
      .select("*")
      .from("terpenes")
      .where({ id: id })
      .cache(MINUTE);
  }
}

module.exports = BubatzDB;
