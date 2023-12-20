import { Request, Response } from "express";
import Tour from "../../models/tour.model";
import Category from "../../models/category.model";

//[GET /categories/
export const list = async (req: Request, res: Response) => {
    const categories = await Category.findAll({
      where :{
        deleted : false,
        status : 'active'
      },
      raw : true
    });
    // console.log(categories);
    res.render("client/pages/categories/index",{
      pageTitle : "Danh sách danh mục",
      categories : categories
    });
}