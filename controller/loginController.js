const mongojs=require("mongojs");
const db=mongojs("apl_inicijativa",["users"]);


const loginController=(req,res)=>{
    let ime=req.body.ime;
    let lozinka=req.body.lozinka;

    db.users.find({first_name:ime,password:lozinka},(err,docs)=>{
        if(err){
            res.redirect("/");
        }
        else {
            if(docs.length==1){
                let korisnik=docs[0];
                req.session.korisnik=korisnik;
                if(korisnik.role=="administrator"){
                    res.redirect("/admin");
                }else{
                    res.redirect("/")
                }

            }
            else{
                res.redirect("/");
            }
        }
    })
}



module.exports=loginController;