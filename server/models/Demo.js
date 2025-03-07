import mongoose from "mongoose";

/* Schema for the demo database */
const demoSchema = new mongoose.Schema(
  {
    demoId: String,
    name: { type: String, required: true },
    age: Number,
    favourite: { type: Boolean, default: false },
  },
  { collection: "Demo" }
);

const Demo = mongoose.model("Demo", demoSchema);
export { Demo };
