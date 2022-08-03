const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const Room = require("../models/room");
const rooms = require("../data/rooms.data");

const Service = require("../models/service");
const services = require("../data/services.data");

mongoose.connect(process.env.MONGO_URI);

const seedRooms = () => {
  try {
    Room.deleteMany();
    console.log("Rooms are deleted");

    Room.insertMany(rooms);
    console.log("All rooms are added");

    return true;
  } catch (error) {
    return console.log(error.message);
  }
};

const seedServices = () => {
  try {
    Service.deleteMany();
    console.log("Services are deleted");

    Service.insertMany(services);
    console.log("All services are added");

    return true;
  } catch (error) {
    return console.log(error.message);
  }
};

const seed = () => {
  const seedRoomsStatus = seedRooms();
  const seedServicesStatus = seedServices();

  if (seedRoomsStatus && seedServicesStatus) {
    process.exit();
  }
};

seed();
