import express from 'express'
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js"
import { verifyToken, verifyUser,  verifyAdmin } from "../utils/verifyToken.js"
const router = express.Router();


// update 
router.post("/:id", verifyUser, updateUser);

// delete

router.delete("/:id", verifyUser, deleteUser);

// get by id

router.get("/:id", verifyUser, getUser);

// get 

router.get("/", verifyAdmin, getUsers);

export default router;