
const RepositoryRoutes = require("express").Router();
const repos = require("../controllers/repository.controller.js");

RepositoryRoutes.post("", repos.getAllRepos);
module.exports = RepositoryRoutes