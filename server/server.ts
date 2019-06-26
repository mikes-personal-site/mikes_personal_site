import * as express from "express";
import * as serve from "express-static";
import * as path from "path";

const app: express.Application = express();
const PORT: number = 3000;

app.use("/client", serve(path.resolve(__dirname, "client")));

app.get(
  "/",
  (req: express.Request, res: express.Response): void => {
    res.sendfile(path.resolve(__dirname, "../client/index.html"));
  }
);

app.listen(PORT, () => {
  const newLocal: string = `listing on http://localhost:${PORT}/`;
  console.log(newLocal);
});
