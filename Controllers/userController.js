const User = require('../model/userModel')

exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        res.json({ error })
    }

}

exports.getAllUser = async (req, res, next) => {
    try {
        const user = await User.find();
        res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        res.json({ error })
    }
}