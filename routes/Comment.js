const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/comment");
const auth = require("../middleware/auth");

router.post("/createComment", auth, commentCtrl.createComment);
router.get("/readAll/:postId", auth, commentCtrl.readAll);
// router.get("/:id", auth, commentCtrl.getOneComment);
// router.put("/:id", auth, commentCtrl.modifyComment);
// router.delete("/:id", auth, commentCtrl.deleteComments);

module.exports = router;
