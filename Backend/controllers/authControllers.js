const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

exports.signup = async (req, res) => {
    const newUser = await User.create({
        name: req.body.name,
        email:req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    })

    const token = jwt.sign(newUser.email, process.env.JWT_SECRET)

    res.status(200).json({
        status: "success",
        data: newUser,
        token: token
    })
}

exports.login = async (req, res) => {
    const { email, password } = req.body
    console.log(email, password)

    const user = await User.findOne({ email }).select("+password")

    if(!user){
        res.status(404).json({
            status: "error",
            data: "User not found"
        })
    }
    const correct = await bcrypt.compare(password, user.password)

    if(!correct){
        res.status(404).json({
            status: "error",
            data: "Password not correct"
        })
    }

    const token = jwt.sign(user.email, process.env.JWT_SECRET)
    
    res.json({
        status: "success",
        data: user,
        token: token
    })
}

exports.logout = async(req, res) => {
    
}