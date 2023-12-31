import { DataSource } from "typeorm";
import { User, UserAudit } from "./entity/User.entity";

export default new DataSource({
  type: "sqlite",
  database: "db.sqlite",
  synchronize: true,
  entities: [User, UserAudit],
});
