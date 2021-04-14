import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { TokenPayLoad } from "../interfaces/TokenPayLoad";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    console.log("Errado");
    return res.sendStatus(401);
  }

  const token = authorization.replace("Bearer", "").trim();

  try {
    const data = jwt.verify(token, "secret");
    //console.log(data);

    const {id} = data as TokenPayLoad;
    req.userId = id;
    return next();

  } catch (err) {
    console.log(err);
    return res.sendStatus(401);
  }
}
