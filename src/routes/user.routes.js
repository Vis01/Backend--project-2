import { Router } from "express";
import { changeAccountDetails, changeCurrentPassword, getCurrentUser, getUserChannelProfile, getWatchHistory, loginUser, logoutUser, refreshAccessToken, registerUser, updateUserAvatar, updateUserCoverImage } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middeware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router=Router()
const vishnu=(req,res)=>{
    res.send("vishnu is listening")
}

router.route("/register").post(
    upload.fields([
            {
                name:"avatar",
                maxCount:1
            },
            {
                name:"coverImage",
                maxCount:1
            }
    ]),
    registerUser);
router.route("/login").post(loginUser)
router.route("/refreshAccessToken").get(refreshAccessToken);


//secure routes

router.route("/logout").post(verifyJWT, logoutUser)
router.route("/changePassword").patch(verifyJWT,changeCurrentPassword);
router.route("/getUser").get(verifyJWT,getCurrentUser);
router.route("/changeAccountDetails").patch(verifyJWT,changeAccountDetails);
router.route("/updateUserAvatar").patch(verifyJWT,upload.single("avatar"),updateUserAvatar);
router.route("/updateUserCoverImage").patch(verifyJWT,upload.single("coverImage"),updateUserCoverImage);
router.route("/c/:username").get(verifyJWT,getUserChannelProfile);
router.route("/WatchHistory").get(verifyJWT,getWatchHistory);


export default router;