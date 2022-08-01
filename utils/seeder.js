const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const Room = require("../models/room");
const rooms = require("../data/rooms.data");

mongoose.connect(process.env.MONGO_URI);

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log("Rooms are deleted");

    await Room.insertMany(rooms);
    console.log("All rooms are added");

    process.exit();
  } catch (error) {
    console.log(error.message);

    process.exit();
  }
};

seedRooms();