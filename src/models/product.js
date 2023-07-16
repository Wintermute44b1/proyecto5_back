const {Schema, model} = require ("mongoose");

const ProductSchema = Schema ({
    product_name: {
        type: String,
        required: [true,"el nombre del producto es obligatorio!"],
        unique: true,
    },
    quantity: {
        type: Number,
        required: [true,"la cantidad es obligatoria!"],

    },
    cost:{
        type: Number,
        required: [true,"el precio es obligatorio!"]
    }
    
})