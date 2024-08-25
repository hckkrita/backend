const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { authorizeRole } = require("../middleware/authorizationMiddleware");
const { addPattern,updatePattern, getPattern, getPatterns } = require("../Controllers/patternController");

/**
 * @description To get all categories
 * @api /api/category/created


/**
 * @description To update categories by id
 * @api /api/category/update/:id
 * @access Private
 * @type PUT
 * @return response
 */

router.post("/create", auth, authorizeRole("admin"), addPattern);
router.patch("/update/:id", auth, authorizeRole('admin'), updatePattern);
router.get("/get/:id", auth, authorizeRole('admin'), getPattern);
router.get("/get", auth, authorizeRole('admin'), getPatterns);




module.exports = router;
