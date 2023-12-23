import { Router } from "express";
const router: Router = Router();

import * as controller from "../../controllers/client/cart.controller"
router.get("/", controller.index);
router.post("/list-json", controller.listJson);
router.post("/order", controller.listJson);

export const cartRoutes: Router = router;
