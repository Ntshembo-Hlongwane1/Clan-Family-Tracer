import mongoose from "mongoose";

const clanSchema = mongoose.Schema({
  clanName: { type: String, required: true, unique: true },
  originated: { type: String, default: " " },
  clan_members: { type: Array, default: [] },
});

export const clanModel = mongoose.model("clanModel", clanSchema);
