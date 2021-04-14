import {Request, Response} from "express";
import {getRepository} from 'typeorm';
import User from '../models/User';

class UserController{
    async store(req:Request,res:Response){

        const repository = getRepository(User);
        const {email, password} = req.body;

        const userExist = await repository.findOne({where:{email}});
        
        if(userExist){
            return res.sendStatus(409);
        }

        
        const user = repository.create({email, password});
        await repository.save(user);

        return res.json(user);

    }

    index(req:Request, res:Response){
        res.send({userId: req.userId});
    }
}

export default new UserController();