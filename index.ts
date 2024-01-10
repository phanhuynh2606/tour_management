import express, { Express, Request, Response } from "express";
// import sequelize from "./configs/database";
import dotenv from "dotenv"
import moment from "moment";
import clientRoutes from "./routes/client/index.route";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin/index.route";
import path from "path";
import { systemConfig } from "./configs/system";
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
app.use(bodyParser.urlencoded({extended : false}))

// Cài đặt PUG
app.set("views", "./views");
app.set("view engine", "pug");
// Cài đặt PUG

//TinyMCE
app.use("/tinymce", express.static(path.join(__dirname, "node_modules", "tinymce")));
// End TinyMCE

// App Local Variables
app.locals.moment = moment
app.locals.prefixAdmin = systemConfig.prefixAdmin

// Routes client
clientRoutes(app);

// Routes admin
adminRoutes(app);

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
