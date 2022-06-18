const { deleteItemAboveFifteyThousand, getItemWithColor, getNameBetween, getLightItem, getExpireItem, getTotalValue, getTotalPrice } = require("../service/item.service")

exports.deleteMoreThanFifteyThousand = async (req,res) => {
   try {
     const data = await deleteItemAboveFifteyThousand()
     res.status(200).json({"mssg": "Data with price more than 50,000 deleted" , error: 0, data: data})

   }catch(error) {
    res.status(error.code).json({"mssg": error.message , error: 1, data: {}})
   }
}

exports.getItemWithColors = async (req,res) => {
  try {
    const data = await getItemWithColor()

    res.status(200).json({"mssg": "Data fetched succesfully" , error: 0, data: data})

  }catch(error) {
   res.status(400).json({"mssg": error.message , error: 1, data: {}})
  }
}

exports.getItemNameInRange = async (req,res) => {
  try {
    const data = await getNameBetween()

    res.status(200).json({"mssg": "Data fetched succesfully" , error: 0, data: data})

  }catch(error) {
   res.status(400).json({"mssg": error.message , error: 1, data: {}})
  }
}

exports.getLightItem = async (req,res) => {
  try{
    const data = await getLightItem(req.body)
    res.status(200).json({"mssg": "Data fetched succesfully" , error: 0, data: data}) 
  }catch(error) {
    res.status(400).json({"mssg": error.message , error: 1, data: {}})
  }
}


exports.getExpireData = async (req,res) => {
  try{
    const data = await getExpireItem()

    res.status(200).json({"mssg": "Data fetched succesfully" , error: 0, data: data}) 
  }catch(error) {
    res.status(400).json({"mssg": error.message , error: 1, data: {}})
  }
}

exports.getTotalValue = async (req,res) => {
  try{
    const data = await getTotalValue()

    res.status(200).json({"mssg": "Data fetched succesfully" , error: 0, data: data}) 
  }catch(error) {
    res.status(400).json({"mssg": error.message , error: 1, data: {}})
  }
}

exports.getTotalPrice = async (req,res) => {
  try{
    const data = await getTotalPrice()

    res.status(200).json({"mssg": "Data fetched succesfully" , error: 0, data: data}) 
  }catch(error) {
    res.status(400).json({"mssg": error.message , error: 1, data: {}})
  }
}
