import express from "express";
import { getAllUsers,register, login, getMyProfile,logout} from "../controllers/user.js";
const router = express.Router();
import { isAuthenticated } from "../middlewares/auth.js";

router.get("/all",getAllUsers);

router.post("/new",register);
router.post("/login",login);
router.get("/logout",logout);
router.get("/me", isAuthenticated, getMyProfile);


export default router; 