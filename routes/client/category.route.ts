import { Router } from "express";
const router: Router = Router();

import * as controller from "../../controllers/client/category.controller"
router.get("/", controller.list);

export const categoryRoutes: Router = router;
