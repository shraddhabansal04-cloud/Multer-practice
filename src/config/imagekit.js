
import Imagekit from "imagekit";
import dotenv from "dotenv"
dotenv.config();

const storage = new Imagekit({
    privateKey: process.env.IK_PRIVATE_KEY,
    publicKey: process.env.IK_PUBLIC_KEY,
    urlEndpoint: process.env.IK_URL,
});

let sendFilesToIK = async(file, fileName)=>{
    return await storage.upload({
        file,
        fileName,
    });
}

export default sendFilesToIK;