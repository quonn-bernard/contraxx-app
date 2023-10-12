import mongoose from "mongoose";
const contractSchema = mongoose.Schema({
  fname: {
    type: String,
    required: [true, "Please add a first name"],
  },
  lname: {
    type: String,
    required: [true, "Please add a last name"],
  },
  eventtype: {
    type: String,
    required: [true, "Please add event type"],
  },
  rentalfeatures: {
    type: Array,
    required: [true],
  },
  bookingdate: {
    type: String,
    required: [true, "Date Required!"],
  },
  bookingtime: {
    type: String,
    required: [true, "Time Required!"],
  },
  bookingduration: {
    type: Number,
    min: 60,
    required: [true, "Booking duration required!"],
  },
  bookingaddress: {
    type: String,
    required: [true, "Booking address required!"]
  }
});

export default mongoose.model('Contract', contractSchema)
