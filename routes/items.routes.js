const { Router } = require("express");
const { deleteMoreThanFifteyThousand, getItemWithColors, getItemNameInRange, getLightItem, getExpireData, getTotalValue, getTotalPrice } = require("../controller/item.controller");

const routers = Router();

routers.delete("/item", deleteMoreThanFifteyThousand)
routers.get("/item/colors" , getItemWithColors)
routers.get("/item/name-range", getItemNameInRange)
routers.post("/item/less-weight" , getLightItem) 
routers.get("/item/expire" , getExpireData) 
routers.get("/item/total-value" , getTotalValue) 
routers.get("/item/total-price" , getTotalPrice) 


module.exports = routers