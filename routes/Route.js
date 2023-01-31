import express from "express";
import{
    getUser,
    Buat,
    Dashboard
} from "../controllers/UserController.js";
// import bodyParser from "body-parser";
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
const router = express.Router();

router.get('/user',getUser);
router.post('/user/post',Buat);
router.get('/',Dashboard);
export default router;