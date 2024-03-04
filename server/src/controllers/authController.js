import UserManager from '../dao/managerUser.js';
import UserModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';
import Student from '.././dao/managerStudents.js'
import {ObjectId} from 'mongodb';
import StudentModel from '../models/studentsModel.js';


// const { ObjectId } = Types;

const usermanager = new UserManager();
const student = new Student();

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
            console.log(codigoAlumno)
            query = new ObjectId(codigoAlumno);
            //query = codigoAlumno 
            console.log('query: ', query);
            //const id = new BSON.ObjectId(codigoAlumno)
            //añado el idstudent al array de idStudent de usuario
            //const studentFound = await StudentModel.findById(codigoAlumno).exec()
            const studentFound = await student.getAllStudents({_id: new ObjectId(codigoAlumno)})
            console.log('student found:', studentFound)
            if(!studentFound){
                return res.status(500).json({
                    data: {},
                    status: 1,
                    message: 'no exite el alumno, intente nuevamente con otro codigo',
                }); 
            }
            user.idstudents.push(query);
            const newUser = await usermanager.createUser(user);
            const userCreated = await usermanager.getOneUser({_id: new ObjectId(newUser.insertedId)})
            console.log('usuario creado: ', newUser)
           // console.log('student found:', studentSon)
        
            const token = jwt.sign(
                {exp:60*60,
                _id: newUser._id},
                'eduNetSecretKey')
            res.status(200).json({userCreated, token})
        } else {
            return res.status(500).json({
                data: {},
                status: 1,
                message: 'Por favor, ingrese un codigo de alumno',
            });
        }
  
    // var date = new Date(data.birthDate);
    // data.birthDate = date;    
    // const newUser = await usermanager.createUser(data);
}

const signUp2 = async(req, res) =>{
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
            console.log(codigoAlumno)
            query = new ObjectId(codigoAlumno) ;
            console.log('query: ', query);
            // añado el idstudent al array de idStudent de usuario
           // const studentSon = await UserModel.findById({_id:  new ObjectId(query)}).exec()
           const studentFound = await usermanager
           .getOneUser({_id: new ObjectId(codigoAlumno)});
            //console.log('student found:', studentSon)
            console.log('student found2:', studentFound)
            if(!studentFound){
                return res.status(500).json({
                    data: {},
                    status: 1,
                    message: 'no exite el alumno, intente nuevamente con otro codigo',
                }); 
            }
            user.idstudents.push(query);
            const newUser = await usermanager.createUser(user);
            console.log('new user', newUser)
            const userCreated = await usermanager.getOneUser({_id: new ObjectId(newUser.insertedId)})
            console.log('usuario creado: ', newUser)
           // console.log('student found:', studentSon)
        
            const token = jwt.sign(
                {exp:60*60,
                _id: newUser._id},
                'eduNetSecretKey')
            res.status(200).json({userCreated, token})
        } else {
            return res.status(500).json({
                data: {},
                status: 1,
                message: 'Por favor, ingrese un codigo de alumno',
            });
        }
  
    // var date = new Date(data.birthDate);
    // data.birthDate = date;    
    // const newUser = await usermanager.createUser(data);
}

const signUp3 = async (req, res) => {
    const { lastname, codigoAlumno, email, password } = req.body;

    console.log('req.body: ', req.body);
    console.log('codigoAlumno: ', codigoAlumno);

    if (!codigoAlumno) {
        return res.status(500).json({
            data: {},
            status: 1,
            message: 'Por favor, ingrese un código de alumno',
        });
    }

    let studentToCreate;
    const _id = new ObjectId(codigoAlumno);
    studentToCreate = await student.getStudent(_id);
    console.log('student: ', studentToCreate);

    if (!studentToCreate) {
        return res.status(500).json({
            data: {},
            status: 1,
            message: 'El estudiante no existe',
        });
    }

    let user = {lastname: lastname, email: email, password: password, idstudents: []}
    user.idstudents.push(_id)

    const newUser = await usermanager.createUser(user);
    const userCreated = await usermanager.getOneUser({ _id: newUser.insertedId });

    const token = jwt.sign(
        { _id: newUser.insertedId }, 
        process.env.JWT_SECRET || 'your_default_secret_key'
    );

    res.status(200).json({ userCreated, token });
};


const signIn = async(req, res)=>{
    try {
        const {email, password } = req.body;
        const user = await usermanager.getOneUser({email: email});

        if(!user) return res.status(401).send("The email does not exist!")
        if(user.password !== password) return res.status(401).send('Wrong Password')

        const token = jwt.sign({_id:user._id}, 'eduNetSecretKey')
        res.status(200).send({user, token})
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

export { signUp, signIn, verifyToken , signUp2, signUp3}; 