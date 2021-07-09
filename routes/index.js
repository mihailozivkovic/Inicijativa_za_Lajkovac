const express=require("express");
const router=express.Router();


router.use("/",require("./home"));


router.use("/login",require("../controller/loginController"));


router.use("/admin",require("./admin"));

module.exports=router;