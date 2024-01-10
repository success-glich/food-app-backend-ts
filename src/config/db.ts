import { Sequelize } from "sequelize-typescript";
import vars from "./vars";
// * import models
import User from "../users/index";

class Database {
  private static instance: Database;
  private sequelize: Sequelize;
  private constructor() {
    this.sequelize = new Sequelize({
      dialect: "postgres",
      host: vars.DB_HOST,
      username: vars.DB_USERNAME,
      password: vars.DB_PASSWORD,
      database: vars.DB_NAME,
      logging: false,
      models: [User],
    });
  }
  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
  public getSequelize(): Sequelize {
    return this.sequelize;
  }
  public registerModels(): void {
    this.sequelize.addModels([]);
  }
}

export default Database;
