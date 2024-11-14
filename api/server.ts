import express, { Request, Response, Application } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => res.send("API Running") as any);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
