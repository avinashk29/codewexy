const { custItemModel } = require("../models/custItems.model")
const { itemModel } = require("../models/item.model")

exports.deleteItemAboveFifteyThousand = async () => {
  try {
    const res = await itemModel.deleteMany({ price: { $gt: 50000 } })
    return res
  } catch (error) {
    throw new Error(error.message)
  }
}

exports.getItemWithColor = async () => {
  try {
    const res = await itemModel.find({ $or: [{ color: "brown" }, { color: "white" }, { color: "black" }] }).select("itemname")
    return res
  } catch (error) {
    throw new Error(error.message)
  }
}

exports.getNameBetween = async () => {
  try {
    const res = await itemModel.find({ itemname: { $gte: "q", $lt: "s" } })
    return res
  } catch (error) {
    throw new Error(error.message)
  }
}

exports.getLightItem = async (data) => {
  try {
    const minWeight = data.weight;
    if (!minWeight) {
      throw new Error("Less weight is required")
    }
    const res = await itemModel.find({ weight: { $lt: minWeight } })
    // const res = await itemModel.find({}).sort({weight: 1}).limit(1)
    return res
  } catch (error) {
    throw new Error(error.message)
  }
}

exports.getExpireItem = async () => {
  try {
    const date = new Date()
    const month = date.getMonth() + 2
    const res = await itemModel.aggregate([
      {
        $project: {
          month: { $month: "$expire_date" },
          itemno: 1,
          itemname: 1
        }
      },
      {
        $match: { month: { $eq: month } }
      }
    ])
    return res
  } catch (error) {
    throw new Error(error.message)
  }
}

exports.getTotalValue = async () => {
  try {
    const res = await custItemModel.aggregate([
      { $group: { _id: "$itemno", count: { $sum: "$quantity_purchased" } } },
      {
        "$lookup": {
          "from": "items",
          "localField": "_id",
          "foreignField": "itemno",
          "as": "item"
        }
      },

      {
        $addFields: {
          custItems: {
            $map: {
              input: "$item",
              in: {
                $mergeObjects: [
                  "$$this",
                  { total: { $multiply: ["$$this.price", "$count"] } }
                ]
              }
            }
          }
        }
      },

      { $project: { itemno: 1, "custItems.total": 1, } }
    ])

    return res
  } catch (error) {
    throw new Error(error.message)
  }
}


exports.getTotalPrice = async () => {
  try {
    const totalCount = await itemModel.aggregate([
      {
        $group: { _id: null, count: { $sum: "$price" } }
      }
    ])
    const items = await itemModel.find({}).select(["itemno", "price"])
    return { totalCount:totalCount[0].count , items }
  } catch (error) {
    throw new Error(error.message)
  }
}
