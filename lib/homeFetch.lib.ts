import axios from "axios";

const BASE_URL = "https://kambr.vercel.app";

export const getRooms = async () => {
  const rooms = await axios.get(`${BASE_URL}/api/rooms`);

  return rooms;
};

export const getServices = async () => {
  const services = await axios.get(`${BASE_URL}/api/services`);

  return services;
};

export const getPlaces = async () => {
  const places = await axios.get(`${BASE_URL}/api/places`);

  return places;
};
