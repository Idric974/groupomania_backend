const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/comment");
const auth = require("../middleware/auth");

//* ✅ 👉 Creat comment.
router.post("/createComment", auth, commentCtrl.createComment);

//* ✅ 👉 Read comment.
router.get("/readAllcomments/:postId", auth, commentCtrl.readAllcomments);
router.post("/readAllReported", auth, commentCtrl.readAllReported);
router.get("/findOne/:postId", auth, commentCtrl.findOne);
router.get("/findOneComment/:id", auth, commentCtrl.findOneComment);

//* ✅ 👉 UpDate comment.
router.post("/updateComment/:id", auth, commentCtrl.updateComment);
router.post("/reportComment/:id", auth, commentCtrl.reportComment);

//* ✅ 👉 Delete comment.
router.post("/deleteComment/:id", auth, commentCtrl.deleteComment);
router.post("/supReportComment/:id", auth, commentCtrl.supReportComment);

module.exports = router;
