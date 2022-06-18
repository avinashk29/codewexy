const { custItemModel } = require("../models/custItems.model");
const { customerModel } = require("../models/customer.model")

exports.getCustomerByLocation = async () => {
  try {
    const data = await customerModel.aggregate([{
      "$group": {
        "_id": "$location",
        "cust_name": { "$push": "$cust_name" }
      }
    },
    ]);
    return data
  } catch (error) {
    throw new Error(error.message)
  }
}

exports.getPhoneNumber = async () => {
  try {
    const res = await customerModel.find({ cust_phone: /^99/ })
    return res
  } catch (error) {
    throw new Error(error.message)
  }
}

exports.getMaxItemCustomer = async () => {
  try {
    const res = await custItemModel.aggregate([
      { $group: { _id: "$cno", count: { $sum: "$quantity_purchased" } } },
      {
        "$lookup": {
          "from": "customers",
          "localField": "_id",
          "foreignField": "cno",
          "as": "customer"
        }
      },
      { $project: { count: 1, customer: 1 } },
      { $sort: { count: -1 } },
      {$limit: 1}
    ])

    return res
  } catch (error) {
    throw new Error(error.message)
  }
}

exports.getAllData = async () => {
  try {
    const data = await custItemModel.aggregate([
      {
        "$lookup": {
          "from": "items",
          "localField": "itemno",
          "foreignField": "itemno",
          "as": "item"
        }
      },
      { $unwind: "$item" },
      {
        "$lookup": {
          "from": "customers",
          "localField": "cno",
          "foreignField": "cno",
          "as": "data"
        }
      },
      { $unwind: "$data" },
      {$project: {"item.itemname":  1, "data": 1, 'quantity_purchased': 1}}

    ])
    return data
  } catch (error) {
    throw new Error(error.message)
  }
}