import { ResponseMessage, StatusCode } from "../helpers/response.js";
import bcrypt from "bcrypt";
import prismaServer from "../prisma.js";

export const register = async (req, res) => {
  try {
    if (req.body.password != req.body.confPassword)
      return res.json({
        status: StatusCode.BAD_REQUEST,
        message: ResponseMessage.Wrongpass,
      });
    const password = await bcrypt.hash(req.body.password, 10);
    const response = await prismaServer.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: password,
      },
    });
    res.json({
      status: StatusCode.OK,
      message: ResponseMessage.SuccsesRegistered,
    });
  } catch (e) {
    res.json({
      status: StatusCode.BAD_REQUEST,
      message: "Server Error",
      error: e,
    });
  }
};
