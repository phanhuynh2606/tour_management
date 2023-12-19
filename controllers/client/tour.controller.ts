import { Request, Response } from "express";
import Tour from "../../models/tour.model";

export const list = async (req: Request, res: Response) => {
    const tours = await Tour.findAll({
      where :{
        deleted : false,
        status : 'active'
      },
      raw : true
    });
    // console.log(tours);
    res.render("client/pages/tours/index",{
      pageTitle : "Danh sách Tour",
      tours : tours
    });
}