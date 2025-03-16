import { JwtPayload } from "jsonwebtoken";
import { Types } from "mongoose";

interface IJwtPayload extends JwtPayload {
  type: string;
  id: Types.ObjectId;
}

export default IJwtPayload;
