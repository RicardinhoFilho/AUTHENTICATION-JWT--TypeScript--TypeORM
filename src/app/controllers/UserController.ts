import { Request, Response } from "express";
import { getRepository } from "typeorm";
import bcrypt from "bcrypt";
import User from "../models/User";

class UserController {
  async create(req: Request, res: Response) {
    const repository = getRepository(User);
    const { email, password } = req.body;

    const userExist = await repository.findOne({ where: { email } });

    if (userExist) {
      return res.sendStatus(409);
    }

    const user = repository.create({ email, password });
    await repository.save(user);

    return res.json(user);
  }

  async update(req: Request, res: Response) {
    const repository = await getRepository(User);
    const { email, password, newPassword } = req.body;
    const userExist = await repository.findOne({ where: { email } });
    console.log(userExist?.password)
    if (!userExist) {
      return res.sendStatus(409);
    }


    const confirmPassword = await bcrypt.compare(password, userExist.password);
    

    if (!confirmPassword) {
        return res.sendStatus(400);
    }
    userExist.update(userExist.id,newPassword);
    return res.json(userExist.id);
  }

  index(req: Request, res: Response) {
    res.send({ userId: req.userId });
  }
}

export default new UserController();
