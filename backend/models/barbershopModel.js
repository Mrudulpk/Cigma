import mongoose from "mongoose";

const barbershopSchema = new mongoose.Schema({
    ownerName: {
        type: String,
        required: true,
    },
    shopName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    alternatePhone: {
        type: String,
        required: true,
    },
    openingTime: {
        type: String,
        required: true,
    },
    closingTime: {
        type: String,
        required: true,
    },
    workingDays: [String],
    image: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    zipCode: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
},{
    timestamps: true
})

const Barbershop = mongoose.model("Barbershop",barbershopSchema);

export default Barbershop