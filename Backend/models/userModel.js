const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true ,"User must have their name"],
    },
    email: {
        type: String,
        required: [true, "User must have their Email"],
        unique: [true, "User already exists"],
        lowercase: true,
        validate: [validator.isEmail, "Please enter a valid Email"]
    },
    password: {
        type: String,
        required: [true, "User must enter a password"],
        minlength: 8,
        select: false
    },
    confirmPassword: {
        type: String,
        required: [true, "User must re-enter their password"],
        validate: {
            validator: function(el){
                return this.password === el
            },
            message: "Password are not the same"
        }
    },
})

UserSchema.pre("save", async function(next){
    this.password = await bcrypt.hash(this.password, 12)
    this.confirmPassword = undefined

    next()
})

module.exports = mongoose.model("Users", UserSchema)