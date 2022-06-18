const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ItemSchema = new schema(
  {
    itemno: {
      type: Number,
      required: true
    },
    itemname:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    weight:{
        type: Number,
        required: true
    },
    expire_date:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    shop_name:{
        type: String,
        required: true
    }
  },
  {
    timestamps: true,
  }
);

ItemSchema.index({itemno:"text"},{unique:true});

const itemModel = mongoose.model('item', ItemSchema);
module.exports = {itemModel,ItemSchema};