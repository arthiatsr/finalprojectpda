const router = require("express").Router();
const AuthRoutes = require("./Authentication");
const testRoute = require("./test")

router.use("/auth", AuthRoutes);
router.use("/test", testRoute);

module.exports = router;
