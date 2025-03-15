import { connect } from "mongoose";

class DbConnection {
  private static instance: DbConnection;

  private dbURI = process.env.DB_URI as string;

  private constructor() {}

  public static get instanceClass(): DbConnection {
    if (!this.instance) {
      console.log("New Instance Saved In Memory");
      this.instance = new DbConnection();
      return this.instance;
    } else {
      console.log("Old Instance Returned From The Memory");
      return this.instance;
    }
  }

  // establishing dbConnection:
  public async connectDB() {
    await connect(this.dbURI)
      .then(() => console.log("DB Connected Successfully"))
      .catch((err) => console.error({ msg: "DB Connection Error", err }));
  }
}

export default DbConnection.instanceClass;
