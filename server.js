const express=require("express")
const app=express();
const routes=require('./routes');
const session=require("express-session");


app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(__dirname+"/public"));

app.use(session({
    name:"sid",
    resave:false,
    saveUninitialized:false,
    secret:"apl_inicijativa",
    cookie:{
        maxAge:1000*60*60*12,
        sameSite:true,
        secure:false,
    }


}))

app.set("view engine", "ejs");


app.use("/",routes);

app.listen(3000,()=>{
   
});