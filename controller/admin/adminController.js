const mongojs=require("mongojs");
const db=mongojs("apl_inicijativa",["users"]);


const adminController=(req,res)=>{
    res.render("administratorTabla");
}

module.exports=adminController;

