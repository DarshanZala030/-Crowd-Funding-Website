const Record = require("../models/RecordModel")

exports.addRecord = async (req, res) => {
    try{
        const record = await Record.create(req.body)

        res.status(200).json({
            status: "success",
            data: record
        })
    }
    catch(err){
        res.status(400).json({
            status: "error",
            error: err
        })
    }
}

exports.getAllRecords = async (req, res) => {
    try{ 
        const records = await Record.find().sort({ date: -1 })

        res.status(200).json({
            status: "success",
            data: records
        })
    }
    catch(err){
        res.status(400).json({
            status: "error",
            error: err
        })
    }
}

exports.deleteRecord = async (req, res) => {
    try{
        await Record.findByIdAndDelete(req.params.id)
    }
    catch(err){
        res.status(400).json({
            status: "error",
            error: err
        })
    }
}