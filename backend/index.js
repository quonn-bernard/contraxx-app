import express from "express";
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import connectToDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

connectToDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT;
app.use("/users", userRouter);

app.use(errorHandler)

app.listen(PORT, (req, res) => {
  console.log(`Listening on port ${PORT}`);
});
