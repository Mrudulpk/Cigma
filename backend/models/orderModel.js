import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    services: [String],
    timeNdate: {
        type: Date
    },
    bookingFees: {
        type: Number,
        required: true,
        default: 0.0,
    },
    serviceCost: {
        type: Number,
        required: true,
        default: 0.0,
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    paymentStatus: {
        type: Boolean,
        required: true,
        default: false,
    },
    paymentResult: {
        id: {type: String},
        status: {type: String},
        update_time: {type: String},
        email_address: {type: String},
    },
},{
    timestamps: true
})

const Order = mongoose.model("Order",orderSchema)

export default Order