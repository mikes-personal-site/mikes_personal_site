import * as express from "express";
import * as path from "path";

const app: express.Application = express();
const PORT: number = 3000;

app.use("/", express.static(path.resolve(__dirname, "../client/assets")));

app.get(
  "/",
  (req: express.Request, res: express.Response): void => {
    res.sendFile(path.resolve(__dirname, "../client/index.html"));
  }
);

app.listen(PORT, () => {
  const newLocal: string = `listing on http://localhost:${PORT}/`;
  console.log(newLocal);
});
