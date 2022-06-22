const router = require ("express").Router();
const listController = require("../controllers/list.controller");
const { userAuth } = require ("../middlewares/userAuth.middleware");

router.route("/").get(userAuth, listController.list);
router.route("/").post(userAuth, listController.create);

router.route("/:listId").get(userAuth, listController.getSingleList);
router.route("/:listId").delete(userAuth, listController.destroy);
router.route("/:listId").put(userAuth, listController.update);

module.exports = router;