import { decrypt, encrypt } from "./services/encrypt.service.js";
import { compareValues, hashValue } from "./services/hash.service.js";
import generateCode from "./services/otp.service.js";
import { generateToken, verifyToken } from "./services/token.service.js";

class Security {
  static instance: Security;

  private constructor() {}

  public static get getInstance() {
    if (!this.instance) {
      this.instance = new Security();
      return this.instance;
    } else {
      return this.instance;
    }
  }

  // Methods:

  // Token:
  generateToken = generateToken;
  verifyToken = verifyToken;

  // Hashing:
  hashValue = hashValue;
  compareValues = compareValues;

  // Encrypting:
  encrypt = encrypt;
  decrypt = decrypt;

  // OTP
  generateCode = generateCode;
}
const SecurityModel = Security.getInstance;
export default SecurityModel;
