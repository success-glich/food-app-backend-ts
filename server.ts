import express, { Express, Request, Response, Application } from "express";
import vars from "./src/config/vars";
import cors from "cors";
import morgan from "morgan";

import router from "./src/routes";
import Database from "./src/config/db";
const app: Application = express();

const port = vars.PORT;

// * middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// * routes
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

const database = Database.getInstance();
database.registerModels();

database
  .getSequelize()
  .sync({ alter: true })
  .then(() => {
    console.log("Database synced successfully");
  })
  .catch((err) => {
    console.log("Error :: Database Sync ::", err);
  });

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
