import * as express from "express";
import * as path from "path";
const app: express.Application = express();
const PORT: number = 3000;

app.use("/", express.static(path.resolve(__dirname, "../client")));

app.get(
  "/",
  (req: express.Request, res: express.Response): void => {
    res.sendFile(path.resolve(__dirname, "../client/views/index.html"));
  }
);

app.get(
  "/projectButton",
  (req: express.Request, res: express.Response): void => {
    res.sendFile(path.resolve(__dirname, "../client/views/projects.html"));
  }
);

app.listen(
  PORT,
  (): void => {
    const newLocal: string = `listing on http://localhost:${PORT}/`;
    console.log(newLocal);
  }
);
