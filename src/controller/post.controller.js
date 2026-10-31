import sendFilesToIK from "../config/imagekit.js";
import fs from "fs";

const createPostController = async(req, res)=>{
try {
    let media = req.file;
    console.log("in req.file->", media);

    // code use for diskstorage memory in multer.

    // let fileBuffer = fs.readFileSync(media.path);

    // let uploadedImages = await sendFilesToIK(fileBuffer, media.originalname); 

    // code for memoryStorage in multer
    let uploadedImages = await sendFilesToIK(media.buffer, media.originalname);
    console.log(uploadedImages);
    return res.send("ok");

} catch (error) {
    console.log(error)
    return res.status(500).json({
        success: false,
        message: "Internal Server Error"
    })
}
}

export default createPostController;