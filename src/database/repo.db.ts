import { User } from "./entity/User.entity";
import db from "./db";
import { InternShipProgram } from "./entity/internship.entity";
export const UserRepo = db.getRepository(User);
export const InternshipRepo = db.getRepository(InternShipProgram);
