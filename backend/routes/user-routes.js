const express = require('express');
const {getUsers, setUsers, editUsers, deleteUsers} =require ('../controllers/user.controller')
const router = express.Router();


router.get("/", getUsers)
router.post("/", setUsers)
router.put("/:id", editUsers)
router.delete("/:id", deleteUsers)

module.exports = router;