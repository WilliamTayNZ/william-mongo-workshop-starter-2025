import "dotenv/config";
import mongoose from "mongoose";
import { PokemonSpecies, Trainer } from "./schema.js";

console.log("Hello World!");

// Connect to MongoDB

/* JS has async operations eg. accessing internet, and to wait for them to finish we use await keyword
So await tells the computer to wait for them to finish first */

await mongoose.connect(process.env.DB_URL); 
console.log("Connected to MongoDB!");

// const pikachu = await PokemonSpecies.findById("000000000000000000000001");
// console.log("Pikachu:", pikachu);

// const species = await PokemonSpecies.find({types: {  $in: ["Water", "Fire"] }});
// const species = await PokemonSpecies.find(); // Blank means it will find all the Pokemon species in the database
// console.log("Pokemon Species:", species);

// const trainers = await Trainer.find({age: { $gte:15 }});
// console.log("Trainers:", trainers);
// console.log(trainers[0].team);

const ash = await Trainer.findOne({ name: "Ash Ketchum" }).populate("team.species");
await ash.populate("team.species");
console.log("Ash's Team:", ash.team);

// Disconnect when done
await mongoose.disconnect();
console.log("Done!");

