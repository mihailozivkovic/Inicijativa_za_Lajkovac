const express=require("express");
const router=express.Router();



router.get("/",require("../controller/admin/adminController"));

module.exports=router;