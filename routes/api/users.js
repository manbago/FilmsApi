const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { User } = require('../../db');
const { check, validationResult } = require('express-validator');


router.post("/register", [
    check("username", "Username is required").not().isEmpty(),
    check("password", "Password is required").not().isEmpty(),
    check("email", "Email is required").isEmail()
], async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
            return res.status(402).json({ errores: errors.array() })
    }


    req.body.password = bcrypt.hashSync(req.body.password, 8);
    const user = await User.create(req.body);
    res.json(user);
});
    

module.exports = router;