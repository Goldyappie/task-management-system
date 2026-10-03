require("dotenv").config();
const express = require("express")
const cors = require("cors")

const taskRouter = require("./routers/taskRouter")
const userRouter = require("./routers/userRouter")
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRouter)
app.use("/api/users", userRouter)

const PORT = process.env.PORT

app.listen(PORT, "0.0.0.0", () => {
    console.log("Connected successfully");
})