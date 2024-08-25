//create models-> then controllers-> routes-> app.js(index.js)

const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { authorizeRole } = require("../middleware/authorizationMiddleware");
const { addYarn,updateYarn, getYarn, getYarns } = require("../Controllers/yarnController");

/**
 * @description To get all categories
 * @api /api/category/create
 * @access Private
 * @type POST
 * @return response
 */

router.post("/create", auth, authorizeRole("admin"), addYarn);

/**
 * @description To update categories by id
 * @api /api/category/update/:id
 * @access Private
 * @type PUT
 * @return response
 */
router.patch("/update/:id", auth, authorizeRole('admin'), updateYarn);
router.get("/get/:id", auth, authorizeRole('admin'), getYarn);
router.get("/get", auth, authorizeRole('admin'), getYarns);




module.exports = router;
