const router = require ("express").Router();
const listController = require("../controllers/list.controller");
const { userAuth } = require ("../middlewares/userAuth.middleware");

router.route("/").get(userAuth, listController.list);
router.route("/").post(userAuth, listController.create);


module.exports = router;