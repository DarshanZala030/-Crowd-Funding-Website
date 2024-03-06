const express = require("express")
const { addRecord, getAllRecords, deleteRecord } = require("../controllers/recordControllers")

const router = express.Router()

router.route("/record").post(addRecord).get(getAllRecords)
router.route("/record/:id").delete(deleteRecord)

module.exports = router