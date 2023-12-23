import { Request, Response } from "express";
import Tour from "../../models/tour.model";

// [GET] /admin/cart/
export const index = (req: Request, res: Response) => {
  res.render("client/pages/cart/index", {
    pageTitle: "Trang giỏ hàng",
  });
};

// [POST] /admin/cart/list-json
export const listJson = async (req: Request, res: Response) => {
  const tours = req.body;
  for (const tour of tours) {
    const infoTour = await Tour.findOne({
      where: {
        id: tour.tourId,
        deleted: false,
        status: "active",
      },
      raw: true,
    });
    // console.log(infoTour);
    tour["info"] = infoTour;
    tour["image"] = JSON.parse(infoTour["images"])[0];
    tour["price_special"] =
      (infoTour["price"] * (100 - infoTour["discount"])) / 100;
    tour["total"] = tour["price_special"]*tour.quantity;
  }
  res.json({
    tours: tours,
  });
};
