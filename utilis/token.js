const jwt = require('jsonwebtoken');

// exports.generateToken = (userInfo) => {
//     // console.log('user ; ', userInfo);
//     const payload = {
//         email: userInfo.email,
//         role: userInfo.role,
//     };

//     // open secret key 
//     // commmand : 
//     // 1. node 
//     // 2. crypto.randomBytes(64).toString('hex')

//     const token = jwt.sign(payload, process.env.TOKEN_SECREC, {
//         expiresIn: "7days"
//     });
//     return token;
// };


exports.generateToken = (userInfo) => {
    // console.log('user ; ', userInfo);
    const payload = {
        email: userInfo.email,
        role: userInfo.role,
    };

    // open secret key 
    // commmand : 
    // 1. node 
    // 2. crypto.randomBytes(64).toString('hex')

    const token = jwt.sign(payload, process.env.TOKEN_SECREC, {
        expiresIn: "7days"
    });
    return token;
};