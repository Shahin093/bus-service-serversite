const { signupService, findByEmail, findByUserEmail } = require("../services/user.service");
const { generateToken } = require("../utilis/token");
const jwt = require('jsonwebtoken');
// const User = require("../model/User");

// user sign up 
exports.signup = async (req, res, next) => {
    try {
        const user = await signupService(req.body);
        res.status(200).json({
            status: 'Success',
            message: 'Successfully sign up '
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            error: error.message
        });
    }
}

// user Checked 
exports.userChecked = async (req, res, next) => {
    try {
        const email = req.params.email;
        const filter = { email: email };
        const user = req.body;
        const options = { upsert: true };
        const updateDoc = {
            $set: user,
        };
        const result = await User.updateOne(filter, updateDoc, options);
        const token = jwt.sign({ email: email }, process.env.TOKEN_SECREC, { expiresIn: '1h' });
        res.send({ result, token });
        res.status(200).json({
            status: 'Success',
            message: 'already log in  '
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            error: error.message
        });
    }
}


/**
 * Step Login System : : : ---->
 * 1. check if Email and password are given 
 * 2. load user with email
 * 3. if not user (send res)
 * 4. compare pass
 * 5. if password not correct send res
 * 6. check user is active
 * 7. if not active send res
 * 8. generate token 
 * 9. send user an  token 
 */
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // 1. check if Email and password are given  
        if (!email || !password) {
            return res.status(401).json({
                status: "fail",
                error: "Please provide your credentials",
            });
        }

        // 2. load user with email 
        const user = await findByEmail(email);
        // 3. if not user (send res) 
        if (!user) {
            return res.status(401).json({
                status: "fail",
                error: "No user found. Please create an account",
            });
        }

        // 4. compare pass 
        const isPasswordValid = user.comparePassword(password, user.password);
        // 5. if password not correct send res 
        if (!isPasswordValid) {
            return res.status(403).json({
                status: "fail",
                error: "Password is not correct",
            });
        }

        // 6. check user is active 
        // 7. if not active send res 
        if (user.status != "active") {
            return res.status(401).json({
                status: "fail",
                error: "Your account is not active yet.",
            });
        }

        // 8. generate token 
        const token = generateToken(user);

        // step 9: send user an token 
        // client site aa password nh pathanur jnno 
        const { password: pwd, ...others } = user.toObject();
        res.status(200).json({
            status: "success",
            message: "Successfully logged in",
            data: {
                user: others,
                token,
            },
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};

// user getme 
exports.getMe = async (req, res, next) => {
    try {
        // res.json(req.user);
        const { email } = req.params;
        // console.log(email);
        const user = await findByEmail(email);

        res.status(200).json({
            status: 'successfully',
            data: user
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            error
        });
    };
};

exports.gettingUserAdmin = async (req, res, next) => {
    try {
        const email = req.params.email;
        console.log(email);
        const user = await findByUserEmail(email);
        console.log(user.role);
        res.status(2000).json({
            status: 'Successfully user',
            data: user.role
        })
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            error
        })
    }

}