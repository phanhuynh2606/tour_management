import { DataTypes } from "sequelize";
import Sequelize from "sequelize";
import sequelize from "../configs/database";

const TourCategory = sequelize.define(
  "TourCategory",
  {
    tour_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "tours",
        key: "id",
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "categories",
        key: "id",
      },
    },
  },
  {
    tableName: "tours_categories", // Kết nối với bảng table
    timestamps: false, // Tự động quản lý createAt và updateAt
  }
);


export default TourCategory;
