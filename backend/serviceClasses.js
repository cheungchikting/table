const knexFile = require("./knexfile").development;
const knex = require("knex")(knexFile);

class Method {
  constructor(knex) {
    this.knex = knex;
  }

  async read() {
    return await knex.select("*").from("data");
  }

  async add(description, pattern, instruction) {
    await knex("data")
      .insert({
        description: description,
        pattern: pattern,
        instruction: instruction,
      })
      .catch((err) => {
        return err;
      });
  }

  async edit(id, description, pattern, instruction) {
    let existId = await knex("data").where("id", id);
    if (existId[0]) {
      await knex("data")
        .update({
          description: description,
          pattern: pattern,
          instruction: instruction,
        })
        .where("id", id)
        .catch((err) => {
          return err;
        });
    }
  }
}
module.exports = Method;
