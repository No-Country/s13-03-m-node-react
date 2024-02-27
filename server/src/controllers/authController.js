import UserManager from '../dao/managerUser.js';
import UserModel from '../models/userModel.js';
//const jwt = require('jsonwebtoken')
import jwt from 'jsonwebtoken'
import { ObjectId } from "mongodb";
import StudentManager from '.././dao/managerStudents.js'



const usermanager = new UserManager();
const studentmanager = new StudentManager()

const signUp = async(req, res) =>{
    //const data = req.body;
    const {lastname, codigoAlumno, email, password} = req.body
    //console.log('esto es data', data.email)
    console.log('req.body: ', req.body)
    console.log('codigoAlumno: ', codigoAlumno)
     let student;
     let user = {lastname: lastname, email: email, password: password, idstudents: []}
     
     //buscar student
     let query;
        if (codigoAlumno) {
            query = { _id: new ObjectId(codigoAlumno) };
            //añado el idstudent al array de idStudent de usuario
            user.idstudents.push(query);
            const newUser = await usermanager.createUser(user);
            const userCreated = await usermanager.getOneUser({_id: new ObjectId(newUser.insertedId)})
            console.log('usuario creado: ', newUser)
        
            const token = jwt.sign(
                {exp:60*60,
                _id: newUser._id},
                'eduNetSecretKey')
            res.status(200).json({userCreated, token})
        } else {
            return res.status(500).json({
                data: {},
                status: 1,
                message: 'no exite el alumno, intente nuevamente con otro codigo',
            });
        }
  
    // var date = new Date(data.birthDate);
    // data.birthDate = date;    
    // const newUser = await usermanager.createUser(data);
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