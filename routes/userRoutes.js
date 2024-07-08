const router = require("express").Router();
const userControllers = require("../controllers/userController");


router.post("/", userControllers.createUser);

// get route

router.get("/", userControllers.getallUsers);

// Get product by id

router.get("/:id", userControllers.getById);

// Update product

router.put("/:id", userControllers.updateUser);

/// Delete a Resource

router.delete("/:id", userControllers.deleteUser);


module.exports = router