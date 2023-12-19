import { DataSource } from "typeorm";
import { User, UserAudit } from "./entity/User.entity";
export default new DataSource({
  type: "sqlite",
  database: "db.sqlite",
  entities: [User, UserAudit],
  synchronize: true,
  cache: true,
});
