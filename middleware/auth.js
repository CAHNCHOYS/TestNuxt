import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  console.log(req.cookies, "verifymiddleawre");
  const token = req.cookies.token;

  if (token) {
    jwt.verify(token, "check", (err, decoded) => {
      if (!err) {
        console.log("decode", decoded);
        req.userEmail = decoded.email;
        next();
      } else {
        res.status(403).json({ message: "not authorazied" });
      }
    });
  } else {
    res.status(403).json({ message: "not authorazied" });
  }
};
