import { Router } from "express";
const router: Router = Router();

import * as controller from "../../controllers/client/tour.controller"
router.get("/:slugCategory", controller.list);
router.get("/detail/:slugTour", controller.detail);

export const tourRoutes: Router = router;
