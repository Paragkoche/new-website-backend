import db from "@/database/db";
import { UserRepo } from "@/database";
beforeEach(async () => {
  await db.initialize();
});
beforeEach(async () => {
  await db.destroy();
});
afterEach(() => {});
describe("Test Database", () => {
  describe("[test 1] User", () => {
    it("[test] Create", () => {
      const User = UserRepo;
    });
  });
});
