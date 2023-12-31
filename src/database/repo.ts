import { User, UserAudit } from "./entity/User.entity";
import db from "./db";
export const UserRepo = db.getRepository(User);
export const UserAuditRepo = db.getRepository(UserAudit);
