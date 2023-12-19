import {
  AfterInsert,
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SHA512, enc } from "crypto-js";
import { genSalt, hash } from "bcrypt";
import { log } from "@/helpers/console";
@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    enum: ["Admin", "Super_Admin"],
  })
  role: "Admin" | "Super_Admin";

  @Column({ default: false })
  isDelete: boolean;

  @OneToMany(() => UserAudit, (audit) => audit.User)
  @JoinColumn()
  audits: UserAudit[];

  @BeforeInsert()
  async createPassword(password: string) {
    log("info", "process password hashing");
    let pass = password || this.password;
    pass = SHA512(pass).toString(enc.Hex);
    log("info", "level one hashing complete");
    pass = await hash(pass, await genSalt(14));
    log("info", "level two hashing complete");
    this.password = pass;
  }
  @AfterInsert()
  async logs() {
    log("info", "user create successfully");
  }
}

@Entity()
export class UserAudit {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  log: string;
  @ManyToOne(() => User, (us) => us.audits)
  @JoinColumn()
  User: User;
}
