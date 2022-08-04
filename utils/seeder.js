const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const Room = require("../models/room");
const rooms = require("../data/rooms.data");

const Service = require("../models/service");
const services = require("../data/services.data");

const Place = require("../models/place");
const places = require("../data/places.data");

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

const seedServices = async () => {
  try {
    await Service.deleteMany();
    console.log("Services are deleted");

    await Service.insertMany(services);
    console.log("All services are added");

    process.exit();
  } catch (error) {
    console.log(error.message);

    process.exit();
  }
};

const seedPlaces = async () => {
  try {
    await Place.deleteMany();
    console.log("Places are deleted");

    await Place.insertMany(places);
    console.log("All places are added");

    process.exit();
  } catch (error) {
    console.log(error.message);

    process.exit();
  }
};

if (process.argv[2] === "-R" || process.argv[2] === "--rooms") {
  seedRooms();
} else if (process.argv[2] === "-S" || process.argv[2] === "--services") {
  seedServices();
} else if (process.argv[2] === "-P" || process.argv[2] === "--places") {
  seedPlaces();
} else process.exit();
