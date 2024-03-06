const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

const RecordRoutes = require("./routes/recordRoutes")
const UserRoutes = require("./routes/userRoutes")

app.use("/api/v1", RecordRoutes)
app.use("/api/v1/users", UserRoutes)

module.exports = app