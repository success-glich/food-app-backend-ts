import { Sequelize } from "sequelize-typescript";
// * import models

class Database {
  private static instance: Database;
  private sequelize: Sequelize;
  private constructor() {
    this.sequelize = new Sequelize({
      dialect: "sqlite",
      host: "localhost",
      username: "XXXX",
      password: "XXXX",
      database: "XXXX",
      logging: false,
      models: [],
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
