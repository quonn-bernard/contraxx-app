import express from "express";
const app = express();
import connectToDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import contractRouter from "./routes/contractRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

connectToDB()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);
app.use("/contract", contractRouter)

app.use(errorHandler);

export { app };
