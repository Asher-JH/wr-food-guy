import "dotenv/config";
import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`🚀 [server]: Server is running at http://localhost:${port}`);
});