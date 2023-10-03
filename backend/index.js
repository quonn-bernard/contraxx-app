import { app } from "./app.js";
import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
app.listen(PORT, (req, res) => {
  console.log(`Listening on port ${PORT}`);
});
