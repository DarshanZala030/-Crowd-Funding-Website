const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = require("./index")

dotenv.config({ path: "./config.env" })

const PORT = process.env.PORT

// const db = process.env.DATABASE_URI.replace("<PASSWORD>", process.env.DATABASE_PASSWORD)
mongoose.connect("mongodb://127.0.0.1:27017/CrowdFund").then(() => console.log("Connection to database successful"))

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`)
})