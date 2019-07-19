import * as express from "express";
import * as path from "path";
const app: express.Application = express();
const PORT = process.env.PORT || 3000;
app.use("/", express.static(path.resolve(__dirname, "../client")));

app.get(
  "/",
  (req: express.Request, res: express.Response): void => {
    res.sendFile(path.resolve(__dirname, "../client/views/index.html"));
  }
);

app.get(
  "/projects",
  (req: express.Request, res: express.Response): void => {
    res.sendFile(path.resolve(__dirname, "../client/views/projects.html"));
  }
);
app.get(
  "/stylesProjects.css",
  (req: express.Request, res: express.Response): void => {
    res.sendFile(
      path.resolve(__dirname, "../client/assets/styles/stylesProjects.css")
    );
  }
);

app.get(
  "/contact",
  (req: express.Request, res: express.Response): void => {
    res.sendFile(path.resolve(__dirname, "../client/views/contact.html"));
  }
);
app.get(
  "/stylesContact.css",
  (req: express.Request, res: express.Response): void => {
    res.sendFile(
      path.resolve(__dirname, "../client/assets/styles/stylesContact.css")
    );
  }
);

app.listen(
  PORT,
  (): void => {
    const newLocal: string = `listing on http://localhost:${PORT}/`;
    console.log(newLocal);
  }
);
