import mongoose from "mongoose";
import dotenv from "dotenv"
import colors from 'colors'
import users from './data/user.js'
import barbershops from "./data/barbershops.js";

import User from "./models/userModel.js";
import Barbershop from "./models/barbershopModel.js";
import Order from "./models/orderModel.js";
import Service from './models/serviceModel.js';
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await User.deleteMany();
        await Barbershop.deleteMany();
        await Order.deleteMany();
        await Service.deleteMany();

        await User.insertMany(users);

        await Barbershop.insertMany(barbershops);
        console.log('Data Imported'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await User.deleteMany();
        await Barbershop.deleteMany();
        await Order.deleteMany();
        await Service.deleteMany();
        
        console.log('Data Destroyed'.red.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

if(process.argv[2] === '-d') {
    destroyData();
}else {
    importData();
}