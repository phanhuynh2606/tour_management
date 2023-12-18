import express,{Express,Request,Response} from "express"

const app: Express = express();
const port : Number = 3000;


// Cài đặt PUG
app.set("views","./views");
app.set("view engine","pug");
// Cài đặt PUG

app.get("/",(req : Request,res:Response) =>{
    res.send("Trang Chu");
});
app.get("/tours",(req : Request,res:Response) =>{
    res.render("client/pages/tours/index");
});

app.listen(port,() =>{
    console.log(`App listening on ${port}`);
})