import express, { Express, Request, Response } from "express";
import sequelize from "./configs/database";
import dotenv from "dotenv"
import Tour from "./models/tour.model";

dotenv.config();

//Kết nối database
sequelize;
//Kết nối database

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

// Cài đặt PUG
app.set("views", "./views");
app.set("view engine", "pug");
// Cài đặt PUG

app.get("/", (req: Request, res: Response) => {
  res.send("Trang Chu");
});
app.get("/tours", async (req: Request, res: Response) => {
  const tours = await Tour.findAll({
    where :{
      deleted : false,
      status : 'active'
    },
    raw : true
  });
  console.log(tours);
  res.render("client/pages/tours/index",{
    pageTitle : "Danh sách Tour",
    tours : tours
  });
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
