const User = require('../model/userModel')

exports.isAuthenticated = async (req, res, next) => {
    const { email, password } = req.body

    if (!email || !password) {
        res.status(400).json({ msg: "invalid" })
    }

    const user1 = await User.findOne({ email: email, password: password });

    if (user1 == null || user1.role != "admin") {
        res.status(400).json({ msg: "admin can access this route" })
    }
    next();
}