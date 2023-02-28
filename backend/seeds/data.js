exports.seed = function (knex) {
  return knex("data")
    .del()
    .then(function () {
      return knex("data").insert([
        {
          description: "fail to load",
          pattern: "when missing details",
          instruction: "supplement details",
        },
      ]);
    });
};
