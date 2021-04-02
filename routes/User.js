const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const auth = require("../middleware/auth");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/findOne/:id", auth, userCtrl.findOne);
router.post("/updateOne/:id", auth, userCtrl.updateOne);
router.post("/deleteUser/:id", auth, userCtrl.deleteUser);
router.get("/userId/:token", auth, userCtrl.userId);

router.get("/userInfo/:token", auth, userCtrl.userInfo);

module.exports = router;
