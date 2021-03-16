const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/post");
const auth = require("../middleware/auth");

router.post("/createPost", auth, postCtrl.createPost);
router.get("/findOne/:id", auth, postCtrl.findOne);
router.get("/readAllPosts", auth, postCtrl.readAllPosts);
router.put("/updatePost", auth, postCtrl.updatePost);
router.post("/reportPost/:id", auth, postCtrl.reportPost);
router.post("/deletePost/:id", auth, postCtrl.deletePost);

module.exports = router;
