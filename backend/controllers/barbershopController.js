import asyncHandler from '../middleware/asyncHandler.js';
import Barbershop from '../models/barbershopModel.js';

const getBarbershops = asyncHandler(async(req, res) => {
    const barbershops = await Barbershop.find({})
    res.json(barbershops)
})

const getBarbershopById =  asyncHandler(async(req, res) => {
    const barbershop = await Barbershop.findById(req.params.id)
    
    if(barbershop){
      return res.json(barbershop)
    } else {
        res.status(404);
        throw new Error('Resource not found');
    }

})

export { getBarbershops, getBarbershopById}