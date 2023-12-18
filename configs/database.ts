import { Sequelize } from "sequelize";
import dotenv from "dotenv"

dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE_NAME, // Tên database
  process.env.DATABASE_USERNAME, // Username
  process.env.DATABASE_PASSWORD, // password
  {
    host: process.env.DATABASE_PASSWORD, // Link đến host của database
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connect successfully.");
  })
  .catch((error) => {
    console.error("Connect Error: ", error);
  });

  export default sequelize;