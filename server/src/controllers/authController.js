import UserManager from '../dao/managerUser.js';
import UserModel from '../models/userModel.js';
//const jwt = require('jsonwebtoken')
import jwt from 'jsonwebtoken'
import { ObjectId } from "mongodb";


const usermanager = new UserManager();


const signUp = async(req, res) =>{
    const data = req.body;
    console.log('esto es data', data)

    var date = new Date(data.birthDate);
    data.birthDate = date;    
    const newUser = await usermanager.createUser(data);
    console.log('newUser', newUser)

    const userCreated = await usermanager.getOneUser({_id: new ObjectId(newUser.insertedId)})
    console.log('usuario creado: ', userCreated)

    const token = jwt.sign(
        {exp:60*60,
        _id: newUser._id},
        'eduNetSecretKey')
    res.status(200).json({userCreated, token})
}

const signIn = async(req, res)=>{
    try {
        const {email, password } = req.body;
        const user = await usermanager.getOneUser({email: email});

        if(!user) return res.status(401).send("The email does not exist!")
        if(user.password !== password) return res.status(401).send('Wrong Password')

        const token = jwt.sign({_id:user._id}, 'eduNetSecretKey')
        res.status(200).send({token})
    } catch (error) {
        res.status(400).send({error})
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