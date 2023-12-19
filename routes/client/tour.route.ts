import { Router } from "express";
const router: Router = Router();

import * as controller from "../../controller/client/tour.controller"
router.get("/", controller.list);

export const tourRoutes: Router = router;
