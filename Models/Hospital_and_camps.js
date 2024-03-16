import mongoose from "mongoose";

const campSchema = new mongoose.Schema({
    name: String,
    Address : String,
    Contact_No : String,
    Timing : String,
})

const campModel = new mongoose.model("Hospitals_and_camps", campSchema);
export default campModel