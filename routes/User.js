const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);

router.post("/showUser", userCtrl.showUser);
router.post("/upDateOneUser", userCtrl.upDateOneUser);
router.post("/destroyOneUser", userCtrl.destroyOneUser);

module.exports = router;
