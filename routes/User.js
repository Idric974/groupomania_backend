const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/findOne/:id", userCtrl.findOne);
router.post("/update", userCtrl.update);
router.post("/destroy", userCtrl.destroy);

module.exports = router;
