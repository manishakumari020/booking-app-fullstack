import express from "express";
import { 
    createHotel, 
    updateHotel, 
    deleteHotel, 
    getHotelById, 
    getHotels, 
    countByCity, 
    countByType, 
    getHotelRooms 
    } 
    from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// Create
router.post("/", verifyAdmin, createHotel);

//update
router.put("/:id", verifyAdmin, updateHotel);

//delete
router.delete("/:id", verifyAdmin, deleteHotel);
// Get
router.get("/find/:id", getHotelById);
// Get All
router.get("/", getHotels);

//
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);


export default router;