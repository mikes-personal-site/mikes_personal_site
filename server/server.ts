import * as express from "express";
const app: express.Application = express();
const PORT: number = 3000;

app.get(
  "/",
  (req: express.Request, res: express.Response): void => {
    res.send("You made it to Mikes Personal Page!");
  }
);

app.listen(PORT, () => {
  const newLocal: string = `listing on http://localhost:${PORT}/`;
  console.log(newLocal);
});
