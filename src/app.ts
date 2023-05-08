// env
require('dotenv').config(); // this is important!

// import express from 'express';
import  express  from "express";
import  config  from "config";
import db from "../config/db";

const app = express();
// json middleware
app.use(express.json());

// routes
import router from "./router";

// logger
import Logger from "../config/logger";

//morgan middleware
import morganMiddleware from "./middleware/morganMiddleware";

app.use(morganMiddleware);
app.use("/api/", router);


//app port
const port = config.get("port") as number || 3000;

app.listen(3000, async() => {
    await db();
    Logger.info(`Server is running on port ${port}`);
});