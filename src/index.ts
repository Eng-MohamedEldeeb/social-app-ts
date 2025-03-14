import express, { Application } from "express";
import bootstrap from "./app.controller.js";

const app: Application = express();
const port: string | number = process.env.PORT || 3000;

bootstrap(app);

app.listen(port, () => console.log("App Is Running On Port", +port));
