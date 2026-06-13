const express = require("express");
const router = express.Router();
const { getContacts, getContact, createContact, updateContact, deleteContact } = require("../controllers/contactController");
const { protectAdmin } = require("../middleware/authMiddleware");

router.get("/", protectAdmin, getContacts);
router.get("/:id", protectAdmin, getContact);
router.post("/", createContact);
router.put("/:id", protectAdmin, updateContact);
router.delete("/:id", protectAdmin, deleteContact);

module.exports = router;
