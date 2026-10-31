import express from "express";
import createPostController from "../controller/post.controller.js";
import uploads from "../config/multer.js";

const router = express.Router();

router.post("/create", uploads.single("image"), createPostController);

export default router;