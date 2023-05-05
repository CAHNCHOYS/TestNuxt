import express, { json } from "express";
import cors from "cors";
import router from "./routes/login.js";
import  cookieParser from 'cookie-parser'

const app = express();

const PORT = process.env.PORT || 3000;

app.use(json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(router);

app.get("/", (req, res) => {
  res.json({ id: 2 });
});

app.listen(PORT, () => {
  console.log("Server is listening on PORT 3000");
});


