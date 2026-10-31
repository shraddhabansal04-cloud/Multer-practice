import express from "express"
import path from "path";
import { fileURLToPath } from "url";
import postRoutes from "./routes/post.route.js"


const app = express();

app.use(express.json());

const uploadPath = fileURLToPath(
   new URL("../uploads", import.meta.url)
)

 app.get("/", (req, res)=>{
    res.send("Server is Running");
 })

 app.use("/api/post", postRoutes);


export default app