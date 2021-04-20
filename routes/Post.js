const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/post");
const auth = require("../middleware/auth");

//* ✅ 👉 Creat.
router.post("/createPost", auth, postCtrl.createPost);

//* ✅ 👉 Read.
router.get("/readAllPosts", auth, postCtrl.readAllPosts);
router.post("/readAllReported", auth, postCtrl.readAllReported);
router.get("/findOne/:id", auth, postCtrl.findOne);

//* ✅ 👉 UpDate.
router.post("/updatePost/:id", auth, postCtrl.updatePost);
router.post("/reportPost/:id", auth, postCtrl.reportPost);

//* ✅ 👉 Delete.
router.post("/deletePost/:id", auth, postCtrl.deletePost);
router.post("/supReportPost/:id", auth, postCtrl.supReportPost);

module.exports = router;
