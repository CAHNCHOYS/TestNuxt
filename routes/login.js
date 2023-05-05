import { Router } from "express";
import jwt from "jsonwebtoken";
import { verifyToken } from "../middleware/auth.js";

const router = Router();

router.post("/auth/login", (req, res) => {
  console.log(req.body);

  const token = jwt.sign({ email: req.body.email }, "check", {
    expiresIn: "2h",
  });

  res.cookie("token", token, { httpOnly: true });
  res.status(200).json({ data: "some data" });
});

router.get("/auth/test", (req, res) => {
  console.log(req.cookies, "cookies");

  res.status(200).json({ error: "Bad request" });
});

router.get("/auth/user", verifyToken, (req, res) => {
  const email = req.userEmail;

  res.json({ userEmail: email });
});

export default router;
