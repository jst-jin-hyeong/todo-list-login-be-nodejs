const express = require("express");
const router = express.Router();
const taskAPI = require("./task.api");
const userApi = require("./user.api");

router.use("/tasks", taskAPI, () => {
  conlole.log("tasks 여기까진 와?");
});
router.use("/user", userApi, () => {
  conlole.log("user 여기까진 와?");
});

module.exports = router;
