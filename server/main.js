import express, { urlencoded } from "express";
import cors from "cors";
import authRouter from "./src/routes/auth_route.js";
import prismaServer from "./src/prisma.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(authRouter);

async function testConDB() {
  try {
    await prismaServer.$connect();
    console.log("Succes Connect To DB");
  } catch (e) {
    console.log("Failed Connect To DB");
  }
}

testConDB();
app.listen(process.env._PORT, () => {
  console.log(`connected to server with port ${process.env._PORT}`);
});
