import jwt from "jsonwebtoken";
import HttpStatusHelper from "../helpers/response.js";

export const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.header("authorization");
    if (!authHeader) return res.json({ status: HttpStatusHelper.UNAUTHORIZED });
    const accesToken = authHeader.split(" ")[1];
    console.log(accesToken);
    jwt.verify(accesToken, process.env.ACCES_TOKEN_SECRET, (err, decoded) => {
      if (err) return res.json({ status: HttpStatusHelper.BAD_REQUEST });
      req.email = decoded.email;
      next();
    });
  } catch (e) {
    console.log(e);
    return res.json({ status: HttpStatusHelper.INTERNAL_SERVER_ERROR });
  }
};
