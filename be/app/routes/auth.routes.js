
const AuthRoutes = require("express").Router();
const { signIn } = require("../controllers/auth/auth.controller");

AuthRoutes.post("/login",signIn);

module.exports = AuthRoutes