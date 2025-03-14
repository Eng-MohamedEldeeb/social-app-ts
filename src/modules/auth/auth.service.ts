// DB Service:
import DbService from "../../db/dbService.service.js";

// User InterFace:
import IUser from "../../db/models/Config/Interfaces/User.interface.js";

// User Model:
import UserModel from "../../db/models/User/User.model.js";

// Services:
import { registerService } from "./services/register.service.js";

class AuthService {
  private model = new DbService<IUser>(UserModel);

  constructor() {}

  register = registerService(this.model);
}

export default new AuthService();
