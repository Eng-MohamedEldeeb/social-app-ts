// JWT:
import jwt from "jsonwebtoken";

// Types:
import IJwtPayload from "../types/token.types.js";

const generateToken = ({ payload }: IJwtPayload): string => {
  return jwt.sign(payload, process.env.JWT_KEY as string);
};

const verifyToken = (token: string): IJwtPayload => {
  return jwt.verify(token, process.env.JWT_KEY as string) as IJwtPayload;
};

export { generateToken, verifyToken };
