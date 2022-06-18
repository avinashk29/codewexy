const mongoose = require('mongoose');
const schema = mongoose.Schema;

const CustItem = new schema(
    {
        cno: {
            type: Number,
            required: true
        },
        itemno: {
            type: Number,
            required: true
        },
        quantity_purchased: {
            type: Number,
            required: true
        },
        date_purchase: {
            type: Date,
            required: true
        }

    },

    {
        timestamps: true,
    }
);

CustItem.index({ itemno: "text" }, { unique: true });

const custItemModel = mongoose.model('cust_item', CustItem);
module.exports = { custItemModel, CustItem };