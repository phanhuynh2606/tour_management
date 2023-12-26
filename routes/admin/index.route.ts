import { Express } from "express";
import { systemConfig } from "../../configs/system";
import { categoryRoute } from "./category.route";

const adminRoutes = (app: Express): void => {
  const PATH_ADMIN = `${systemConfig.prefixAdmin}`;

  app.use(`/${PATH_ADMIN}/categories`, categoryRoute);
};

export default adminRoutes;
