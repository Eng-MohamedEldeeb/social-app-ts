// Model Type:
import { Model } from "mongoose";

// DB Services:
import { findOne } from "./services/findOne.service.js";
import { create } from "./services/create.service.js";

class DbService<TDocument> {
  constructor(private model: Model<TDocument>) {}

  public create = create(this.model);

  public findOne = findOne(this.model);
}

export default DbService;
