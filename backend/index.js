import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3005",
    credentials: true,
  })
);

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
