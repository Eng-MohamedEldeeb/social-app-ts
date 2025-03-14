import { Application, json } from "express";
import ConnectDB from "./db/dbConnection.js";
import unknownURLHandler from "./utils/Error/unknownURL.handler.js";
import globalErrorHandler from "./utils/Error/globalError.handler.js";

const bootstrap = (app: Application) => {
  // DB Connection:
  ConnectDB.dbConnect();

  // Parsing Body's Buffer:
  app.use(json());

  // Unknown Url Error Handler:
  app.all("*", unknownURLHandler);

  // Global Error Handler:
  app.use(globalErrorHandler);
};

export default bootstrap;
