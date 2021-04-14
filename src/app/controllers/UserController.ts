import {Request, Response} from "express";
class UserController{
    store(req:Request,res:Response){
        return res.send('okay');
    }
}

export default new UserController();