const express = require("express");
const router = express.Router();

const commentsCtrl = require("../controllers/comments");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.comments("/", auth, multer, commentsCtrl.createComments);
router.get("/", auth, commentsCtrl.getAllComments);
router.get("/:id", auth, commentsCtrl.getOneComments);
router.put("/:id", auth, multer, commentsCtrl.modifyComments);
router.delete("/:id", auth, commentsCtrl.deleteComments);

module.exports = router;
