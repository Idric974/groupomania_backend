const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const auth = require("../middleware/auth");

//* ✅ 👉 Creat.
router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);

//* ✅ 👉 Read.
router.get("/findOne/:id", auth, userCtrl.findOne);
router.get("/userId/:token", auth, userCtrl.userId);

router.get("/userInfo/:token", auth, userCtrl.userInfo);

//* ✅ 👉 UpDate.
router.post("/updateOne/:id", auth, userCtrl.updateOne);

//* ✅ 👉 Delete.
router.post("/deleteUser/:id", auth, userCtrl.deleteUser);

module.exports = router;
