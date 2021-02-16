const express = require("express");
const router = express.Router();

const postCtrl = require("../controllers/post");
const auth = require("../middleware/auth");

router.post("/createPost", auth, postCtrl.createPost);
router.get("/readPost/:id", auth, postCtrl.readPost);
router.post("/readAllPosts", auth, postCtrl.readAllPosts);
router.put("/updatePost", auth, postCtrl.updatePost);

module.exports = router;
