const express= require("express");
const router = express.Router();
const register=require('../controllers/auth.controller');

router.post("/register",register.register)
router.post("/updateData",register.updateUser)
router.post("/updateUserProfile",register.updateUserProfile)
router.post("/authentication",register.authenticateUser)
router.get("/getUserlist",register.getAllUserList)
router.get("/deleteAllData",register.deleteAllData)
router.post("/search",register.search)
router.post("/saveWork",register.saveWork)
router.get("/getAllWorkData",register.getAllWorkData)
router.post("/getAllWorkDataForPerticularUser",register.getAllWorkDataForPerticularUser)

module.exports = router
