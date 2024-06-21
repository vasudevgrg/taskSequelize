const express= require("express");
const cors= require("cors");

const app= express();
const { uploadMiddleware } = require("./middlewares/multer");

const userRouter= require("./routes/user");


app.use(cors());
app.use(express.json());
app.use("/",userRouter);


app.listen(5002, ()=>console.log("listening to 5002"));