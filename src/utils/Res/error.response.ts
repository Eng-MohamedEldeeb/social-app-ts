import { TErrorResponse } from "./types/response.types.js";

const errorResponse = ({ res, next, error, status }: TErrorResponse) => {
  // In "res" Case:
  if (res) return res.status(status).json({ success: false, status, error });

  // In "next" Case
  if (next) return next({ error, status });
};

export default errorResponse;
