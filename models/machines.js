const mongoose = require ('mongoose');


const machineSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
      },
      product_type: {
        type: String,
        required: true,
        trim: true,
      },
      water_line_compatible: {
        type: Boolean,
        required: true,
      },
      model: {
        type: String,
        required: false,
        trim: true,
      },
      description: {
        type: String,
        required: false,
        trim: true,
      },
    }
);

const Machine = mongoose.model('Machine',machineSchema)

module.exports=Machine;