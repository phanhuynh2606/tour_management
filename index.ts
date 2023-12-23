import express, { Express, Request, Response } from "express";
// import sequelize from "./configs/database";
import dotenv from "dotenv"
import moment from "moment";
import clientRoutes from "./routes/client/index.route";
import bodyParser from "body-parser";
dotenv.config();

// Test Kết nối database
// sequelize;
//Kết nối database

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

// Nhúng file tĩnh
app.use(express.static("public"));
// Nhúng file tĩnh

//
app.use(bodyParser.json()); 

// Cài đặt PUG
app.set("views", "./views");
app.set("view engine", "pug");
// Cài đặt PUG

// App Local Variables
app.locals.moment = moment

// Routes client
clientRoutes(app);

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
