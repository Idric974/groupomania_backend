const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/findOne/:id", userCtrl.findOne);
router.post("/updateOne/:id", userCtrl.updateOne);
router.post("/destroy", userCtrl.destroy);

module.exports = router;
