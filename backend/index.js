import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`);
  });