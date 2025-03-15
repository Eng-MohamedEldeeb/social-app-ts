import {
  UserGender,
  UserRole,
} from "../../../../db/models/Config/Types/User.type.js";

interface ISignUp {
  firstName: string;
  lastName: string;
  phone: string;

  userName: string;
  email: string;
  password: string;

  role?: UserRole;
  gender: UserGender;
}

interface ILogin {
  email: string;
  userName: string;
  password: string;
}

export { ISignUp, ILogin };
