const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/comment");
const auth = require("../middleware/auth");

router.post("/createComment", auth, commentCtrl.createComment);
router.get("/readAll/:postId", auth, commentCtrl.readAll);
router.get("/findOne/:postId", auth, commentCtrl.findOne);
router.delete("/update/", auth, commentCtrl.update);
router.delete("/delete/:id", auth, commentCtrl.delete);

module.exports = router;
