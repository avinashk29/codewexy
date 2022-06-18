const mongoose = require('mongoose');
const schema = mongoose.Schema;

const CustomerSchema = new schema(
  {
    cno: {
      type: Number,
      required: true
    },
    cust_name:{
        type: String,
        required: true
    },
    cust_phone:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    }
  },
  {
    timestamps: true,
  }
);

CustomerSchema.index({cust_phone:"text"},{unique:true});

const customerModel = mongoose.model('Customer', CustomerSchema);
module.exports = {customerModel,CustomerSchema};