const { getCustomerByLocation, getPhoneNumber, getMaxItemCustomer, getAllData } = require("../service/customer.service")

exports.getCustomerByLocation = async (req,res) => {
    try{
        const data = await getCustomerByLocation()
        res.status(200).json({"mssg": "Data fetched succesfully." , error: 0, data: data})
    }catch(error) {
        res.status(200).json({"mssg": error.message , error: 1, data: {}})
    }
}

exports.getNumberRegex = async (req,res) => {
    try{
        const data = await getPhoneNumber()
        res.status(200).json({"mssg": "Data fetched succesfully." , error: 0, data: data})
    }catch(error) {
        res.status(200).json({"mssg": error.message , error: 1, data: {}})
    }
    
}

exports.getMaxItem = async (req,res) => {
    try{
        const data = await getMaxItemCustomer()
        res.status(200).json({"mssg": "Data fetched succesfully." , error: 0, data: data})
    }catch(error) {
        res.status(200).json({"mssg": error.message , error: 1, data: {}})
    }
    
}

exports.getAllData = async (req,res) => {
    try{
        const data = await getAllData()
        res.status(200).json({"mssg": "Data fetched succesfully." , error: 0, data: data})
    }catch(error) {
        res.status(200).json({"mssg": error.message , error: 1, data: {}})
    } 
}