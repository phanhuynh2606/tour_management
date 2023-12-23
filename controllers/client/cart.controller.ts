import { Request, Response } from "express";

// [GET] /admin/cart/
export const index = (req:Request, res : Response) => {

    res.render("client/pages/cart/index",{
        pageTitle : "Trang giỏ hàng"
    });
};