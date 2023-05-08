import mongoose from "mongoose";
import config from "config";
import Logger from "./logger";

async function connect() {
    const dbUri = config.get("dbUri") as string;
    try {
        await mongoose.connect(dbUri)
        Logger.info("DB connected");
    } catch (e) {
        Logger.error("Error connecting to db");
        Logger.error(`Error: ${e}`);
        process.exit(1);
    }
}

export default connect;