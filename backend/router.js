const express = require("express");
const axios = require("axios");
require("dotenv").config();

class Router {
  constructor(Method) {
    this.Method = Method;
  }
  router() {
    const router = express.Router();
    router.get("/api/read", this.readData.bind(this));
    router.post("/api/add", this.addData.bind(this));
    router.post("/api/edit", this.editData.bind(this));
    return router;
  }

  async readData(req, res) {
    let data = await this.Method.read();
    res.send(data);
  }

  async addData(req, res) {
    let description = req.body.description;
    let pattern = req.body.pattern;
    let instruction = req.body.instruction;
    let response = await this.Method.add(description, pattern, instruction);
    res.send(response);
  }

  async editData(req, res) {
    let id = req.body.id;
    let description = req.body.description;
    let pattern = req.body.pattern;
    let instruction = req.body.instruction;
    let response = await this.Method.edit(
      id,
      description,
      pattern,
      instruction
    );
    res.send(response);
  }
}
module.exports = Router;
