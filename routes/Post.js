const express = require("express");
const router = express.Router();

const postCtrl = require("../controllers/post");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.post("/createPost", auth, multer, postCtrl.createPost);
router.get("/readPost", auth, postCtrl.readPost);
router.get("/readAllPost", auth, postCtrl.readAllPost);
router.put("/updatePost", auth, multer, postCtrl.updatePost);
router.delete("destroyPost", auth, postCtrl.deletePost);

module.exports = router;
