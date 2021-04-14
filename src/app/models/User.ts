import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
  getConnection,
} from "typeorm";
import bcrypt from "bcrypt";

@Entity("users")
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  async update(id:number, newPassword: string) {
    try {
    const updatedUser = await getConnection()
        .createQueryBuilder()
        .update(User)
        .set({
          password: bcrypt.hashSync(newPassword, 8),
        })
        .where(`id =${id}`).execute();
        
        return updatedUser;

    } catch (err) {
      console.log(err.message);
    }
  }

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }
}

export default User;
