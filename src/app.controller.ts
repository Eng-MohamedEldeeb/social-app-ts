// Express:
import { Application, json } from "express";

// DB:
import dbConnection from "./db/dbConnection.js";

// Handlers:
import unknownURLHandler from "./utils/Error/unknownURL.handler.js";
import globalErrorHandler from "./utils/Error/globalError.handler.js";

// Routes:
import authController from "./modules/auth/auth.controller.js";

const bootstrap = (app: Application) => {
  // DB Connection:
  dbConnection.connectDB();

  // Parsing Body's Buffer:
  app.use(json());

  // Routes:
  app.use("/auth", authController);

  // Unknown Url Error Handler:
  app.all("*", unknownURLHandler);

  // Global Error Handler:
  app.use(globalErrorHandler);
};

export default bootstrap;
