import { connect } from "mongoose";

interface IConnectDB<> {
  dbConnect(): Promise<void>;
}

// class ConnectDB implements IConnectDB {
class ConnectDB {
  constructor() {}

  // DB Connection Method
  async dbConnect(): Promise<void> {
    await connect(process.env.DB_URI as string)
      .then(() => console.log("DB Connected Successfully"))
      .catch((err: string) =>
        console.error({
          msg: "DB Error",
          err,
        })
      );
  }
}

export default new ConnectDB();
