const express= require("express");
const { getUsers, addUser } = require("../controllers/user");
const { uploadMiddleware } = require("../middlewares/multer");
const app= express();

const router= express.Router();

router.get("/getUsers",getUsers);
router.post("/addUser", uploadMiddleware, addUser);

module.exports=router;