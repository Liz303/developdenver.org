const express = require("express");
const passport = require("passport");
const router = express.Router();

const {
  create, read, update, destroy, list, 
} = require("../controllers/talk");

module.exports = (app) => {
  router.get("/", list);
  router.get("/:title", read);
  router.use(passport.authenticate("jwt", { session: false }));
  router.post("/", create);
  router.put("/:id", update);
  router.delete("/:id", destroy);

  return router;
};