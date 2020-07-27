const mongoose = require ('mongoose');


const podSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: false,
        trim: true,
        minlength: 3,
      },
      product_type: {
        type: String,
        required: true,
        trim: true,
      },
      coffee_flavor: {
        type: String,
        required: true,
        trim: true,
      },
      pack_size_in_dozens: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: false,
        trim: true,
      },
    }
);

const Pod = mongoose.model('Pod',podSchema)

module.exports=Pod;