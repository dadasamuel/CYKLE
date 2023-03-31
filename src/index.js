import 'dotenv/config'
import express from "express";

const app = express();
app.use(express.json());
import { router as userRouter } from "./routes/user.routes.js";
const port = process.env.PORT || 4500;

app.get("/", (req, res) => {
    res.send("welcome");
});

app.use("/api", userRouter);
app.listen(port, () => {
    console.log(`🚀🚀 server up and running on port: ${port}`)
})