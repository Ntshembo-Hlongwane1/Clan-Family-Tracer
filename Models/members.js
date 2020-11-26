import mongoose from "mongoose";

const membersSchema = mongoose.Schema({
  familyName: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  image: { type: String, default: " " },
  areaOfBirth: { type: String, default: " " },
  birthDate: { type: String, default: " " },
  deathDate: { type: String, default: " " },
  mother: { type: String, default: " " },
  father: { type: String, default: " " },
  children: { type: Array, default: [] },
  wife: { type: String, default: " " },
});

export const membersModel = mongoose.model("membersModel", membersSchema);
