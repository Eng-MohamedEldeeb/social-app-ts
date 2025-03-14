import { UserRole } from "../../../../db/models/Config/Types/User.type.js";

interface ISignUp {
  firstName: string;
  lastName: string;
  phone: string;

  email: string;
  userName: string;
  password: string;

  private: boolean;
  role: UserRole;
}

interface ILogin {
  email: string;
  userName: string;
  password: string;
}

export { ISignUp, ILogin };
