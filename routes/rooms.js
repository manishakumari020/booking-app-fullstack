import express from "express";
import { createRoom, updateRoom, updateRoomAvailability, deleteRoom, getRoomById, getAllRooms } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

// update

router.put("/:id", verifyAdmin, updateRoom);

// update for room availability
router.put("/availability/:id", verifyAdmin, updateRoomAvailability);

// delete
router.delete("/:id", verifyAdmin, deleteRoom);

// get by id
router.get("/:id", getRoomById);

// get all
router.get("/", getAllRooms);

export default router;