const router = require("express").Router();
const testController = require("../../controllers/testController");

console.log("first")
router.route("/new").get(testController.findAllData)

module.exports=router
