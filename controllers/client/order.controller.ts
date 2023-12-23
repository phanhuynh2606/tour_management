import { Request, Response } from "express";


// [POST] /admin/order
export const order = async (req: Request, res: Response) => {
    const data = req.body;
    console.log(data);

    res.json({
        code: 200,
        message : "Đặt hàng thành công"
    })
}