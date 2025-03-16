import { TSuccessResponse } from "./types/response.types.js";

const successResponse = <TData>({
  res,
  status = 200,
  msg = "done",
  data,
}: TSuccessResponse<TData>) => {
  return res.status(status).json({ success: true, msg, data });
};

export default successResponse;
