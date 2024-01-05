import express, { Express, Request, Response, Application } from "express";
import vars from "./src/config/vars";
import cors from "cors";
import morgan from "morgan";
const app: Application = express();

const port = vars.PORT;

// * middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
