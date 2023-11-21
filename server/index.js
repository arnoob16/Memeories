import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import memeRoutes from "./routes/meme.js";
dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/memes", memeRoutes);
const PORT = process.env.PORT || 5000;

mongoose
	.connect(process.env.MONGO_CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(PORT, () => console.log(`Server is  running on port : ${PORT}`))
	)
	.catch((error) => console.log(error.message));
mongoose.set("useFindAndModify", false);

export default app;