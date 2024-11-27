import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import prismaServer from "../prisma.js";
import HttpStatusHelper from "../helpers/response.js";
import { json } from "express";

export const register = async (req, res) => {
  try {
    if (req.body.password != req.body.confPassword)
      return res.json({
        status: HttpStatusHelper.BAD_REQUEST,
      });

    const password = await bcrypt.hash(req.body.password, 10);
    await prismaServer.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: password,
      },
    });
    res.json({
      status: HttpStatusHelper.OK,
    });
  } catch (e) {
    res.json({
      status: HttpStatusHelper.INTERNAL_SERVER_ERROR,
      error: e,
    });
  }
};

export const login = async (req, res) => {
  try {
    const response = await prismaServer.user.findUnique({
      where: { email: req.body.email },
    });
    if (!response)
      return res.json({
        status: HttpStatusHelper.NOT_FOUND,
      });
    const pass = await bcrypt.compare(req.body.password, response.password);
    if (!pass)
      return res.json({
        status: HttpStatusHelper.BAD_REQUEST,
      });

    const accesToken = jwt.sign(
      {
        id: response.id,
        name: response.name,
        email: response.email,
      },
      process.env.ACCES_TOKEN_SECRET,
      {
        expiresIn: "60s",
      }
    );
    const refreshToken = jwt.sign(
      {
        id: response.id,
        name: response.name,
        email: response.email,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );

    await prismaServer.user.update({
      where: { email: req.body.email },
      data: {
        refreshToken: refreshToken,
      },
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 1000,
    });

    res.json({ status: HttpStatusHelper.OK, accesToken: accesToken });
  } catch (e) {
    res.json({
      status: HttpStatusHelper.INTERNAL_SERVER_ERROR,
      error: e,
    });
  }
};

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies["refreshToken"] || null;
    if (!refreshToken)
      return res.json({
        status: HttpStatusHelper.UNAUTHORIZED,
      });

    const user = await prismaServer.user.findMany({
      where: { refreshToken: refreshToken },
    });

    if (!user[0]) return res.json({ status: HttpStatusHelper.NOT_FOUND });
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err) return res.json({ status: HttpStatusHelper.BAD_REQUEST });
        const accesToken = jwt.sign(
          {
            id: user[0].id,
            name: user[0].name,
            email: user[0].email,
          },
          process.env.ACCES_TOKEN_SECRET,
          {
            expiresIn: "60s",
          }
        );
        return res.json({
          status: HttpStatusHelper.OK,
          accesToken: accesToken,
        });
      }
    );
  } catch (e) {
    res.json({ status: HttpStatusHelper.INTERNAL_SERVER_ERROR, detail: e });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await prismaServer.user.findMany();
    return res.json({ status: HttpStatusHelper.OK, data: users });
  } catch (e) {
    return res.json({
      status: HttpStatusHelper.INTERNAL_SERVER_ERROR,
      detail: e,
    });
  }
};
