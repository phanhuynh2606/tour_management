import express, { Express, Request, Response } from "express";
import sequelize from "./configs/database";
import dotenv from "dotenv"

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
app.get("/tours", (req: Request, res: Response) => {
  res.render("client/pages/tours/index");
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
