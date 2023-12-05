import mongoose from "mongoose";

const serviceTypeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      servicetype: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
      },
      services: [{
        name: String,
        price: Number,
      }],
})

const serviceModelSchema = new mongoose.Schema({
    barbershopId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Barbershop",
    },
    serviceType: [serviceTypeSchema]
})

const Service = mongoose.model("Service",serviceModelSchema)

export default Service