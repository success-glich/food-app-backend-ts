import { Response } from "express";

function errorRes(
  res: Response,
  err: any,
  errMsg = "Server Error ",
  statusCode = 500
) {
  console.error("ERROR:", err);
  return res.status(statusCode).json({ success: false, error: errMsg });
}

function successRes(res: Response, data: any, statusCode = 200) {
  return res.status(statusCode).json({ success: true, data });
}

export default {
  errorRes,
  successRes,
};
