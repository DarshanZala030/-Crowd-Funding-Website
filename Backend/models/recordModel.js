const mongoose = require("mongoose")

const RecordSchema = mongoose.Schema({
    type: {
        type: String,
        required: [true, "A record must have its type"],
        enum: ["Income", "Expense"]
    },
    amount: {
        type: Number,
        required: [true, "A record must have na amount"]
    },
    name: {
        type: String,
        required: [true, "A record must have a Payer or a Payee"]
    },
    category: {
        type: String, 
        required: [true, "A record must have a category"]
    },
    note: String,
    paymentStatus: {
        type: String,
        required: [true, "A record must have its payment status"],
        enum: ["Cleared", "Uncleared"]
    },
    date: {
        type: Date,
        required: [true, "A record must have its payment date"]
    }
});

module.exports = mongoose.model("Record", RecordSchema)