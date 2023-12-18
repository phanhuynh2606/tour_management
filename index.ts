import express,{Express,Request,Response} from "express"

const app: Express = express();
const port : Number = 3000;

app.get("/",(req : Request,res:Response) =>{
    res.send("Trang Chu");
});
app.get("/tours",(req : Request,res:Response) =>{
    res.send("Danh sách tour");
});

app.listen(port,() =>{
    console.log(`App listening on ${port}`);
})