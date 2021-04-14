import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("users")
class User {
  @PrimaryColumn("int")
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;
}

export default User;
