import dotenv from "dotenv";
dotenv.config({});

export default {
  PORT: String(process.env.PORT),
  DB_HOST: String(process.env.DB_HOST),
  DB_PORT: String(process.env.DB_PORT),
  DB_USERNAME: String(process.env.DB_USERNAME),
  DB_PASSWORD: String(process.env.DB_PASSWORD),
  DB_NAME: String(process.env.DB_NAME),
};
