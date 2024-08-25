const express= require('express');
const createContact = require('../Controllers/contactController');
const router= express.Router();
const { updateContact, getContact, getContacts } = require("../controllers/categoryController");


//route to createUser

router.post('/createContact',createContact);





module.exports = router;
