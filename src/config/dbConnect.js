import mongoose from "mongoose";

mongoose.connect('mongodb+srv://leo-ngra:leonina@cluster0.ib1urng.mongodb.net/alura-node');

let db = mongoose.connection;

export default db;