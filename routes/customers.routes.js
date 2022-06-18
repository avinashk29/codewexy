const { Router } = require("express");
const { getCustomerByLocation, getNumberRegex, getMaxItem, getAllData } = require("../controller/customer.controller");

const routes = Router()

routes.get("/customer/same-location", getCustomerByLocation)
routes.get("/customer/cutsomer-phone", getNumberRegex)
routes.get("/customer/max-item" , getMaxItem)
routes.get("/customer" , getAllData)
module.exports = routes