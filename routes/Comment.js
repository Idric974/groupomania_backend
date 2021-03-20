const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/comment");
const auth = require("../middleware/auth");

router.post("/createComment", auth, commentCtrl.createComment);
router.post("/reportComment/:id", auth, commentCtrl.reportComment);
router.get("/readAllcomments/:postId", auth, commentCtrl.readAllcomments);
router.post("/readAllReported", auth, commentCtrl.readAllReported);
router.get("/findOne/:postId", auth, commentCtrl.findOne);
router.delete("/update/", auth, commentCtrl.update);
router.post("/deleteComment/:id", auth, commentCtrl.deleteComment);

module.exports = router;
