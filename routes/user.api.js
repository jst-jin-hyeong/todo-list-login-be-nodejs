const express = require("express");
const taskController = require("../controller/task.controller");
const router = express.Router();

// //1. 회원가입 endpoint
// router.post("/", (req, res) => {
//   console.log("post 여기까지 타고는 들어오나");
//   res.send("post 되나");
// });

// router.get("/", taskController.getTask);

// module.exports = router;

// //

router.post("/", taskController.createTask);

router.get("/", taskController.getTask);

router.put("/:id", taskController.updateTask);

router.delete("/:id", taskController.deleteTask);

module.exports = router;
