import express, { urlencoded } from "express";
import cors from "cors";
import authRouter from "./prisma/src/routes/auth_route.js";
import prismaServer from "./prisma/src/prisma.js";

const app = express();
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(express.json());
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
  console.log("connected to server");
});
