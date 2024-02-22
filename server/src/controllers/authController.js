import UserManager from '../dao/managerUser.js';
import UserModel from '../models/userModel.js';
const jwt = require('jsonwebtoken')


const usermanager = new UserManager();


const signUp = async(req, res) =>{
    const data = req.body;

    const newUser = await usermanager.createUser(data);

    const token = jwt.sign({_id: newUser._id}, 'eduNetSecretKey')
    res.status(200).json({token})
}

const signIn = async(req, res)=>{
    try {
        const {email, password } = req.body;
        const user = await usermanager.getOneUser(email);

        if(!user) return res.status(401).send("The email does not exist!")
        if(user.password !== password) return res.status(401).send('Wrong Password')

        const token = jwt.sign({_id:user._id}, 'eduNetSecretKey')
        res.status(200).send({token})
    } catch (error) {
        
    }
}

function verifyToken(req, res, next) {
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorize request');
        }
    
        const token = req.headers.authorization.split(' ')[1]
        if(token === 'null'){
            return res.status(401).send('Unauthorize request');
        }
    
        const payload = jwt.verify(token, 'secretKey');
        req.userId = payload._id;
        next();
}

export { signUp, signIn, verifyToken }; 