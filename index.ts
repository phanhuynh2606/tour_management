import express, { Express, Request, Response } from "express";
import sequelize from "./configs/database";
import dotenv from "dotenv"

import clientRoutes from "./routes/client/index.route";

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



// Routes client
clientRoutes(app);

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
