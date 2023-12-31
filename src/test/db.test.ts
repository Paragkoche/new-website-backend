import db from "@/database/db";
import { UserRepo } from "@/database";
import { UpdateResult } from "typeorm";
beforeEach(async () => {
  await db.initialize();
});

afterEach(async () => {
  await db.destroy();
});
const data = {
  email: "paragkoche@gmail.com",
  password: "koche3588",
  role: "Super_Admin",
};
describe("Test Database", () => {
  describe("[test 1] User", () => {
    it("[USER] get", async () => {
      const User = await UserRepo.find();
      expect(User).toBeInstanceOf(Array);
    });
    it("[USER] create", async () => {
      const CreateUserData = await UserRepo.save(
        UserRepo.create({
          email: "paragkoche@gmail.com",
          password: "koche3588",
          role: "Super_Admin",
        })
      );

      expect(CreateUserData.password).not.toBe(data.password);
      expect(CreateUserData.isDelete).toBe(false);
    });
    it("[USER] Update", async () => {
      const UpdateUserData = await UserRepo.update(
        {
          email: data.email,
        },
        {
          isDelete: true,
        }
      );
      // console.log(UpdateUserData);

      expect(UpdateUserData).toBeInstanceOf(UpdateResult);
    });
    it("[USER] Delete", async () => {
      const deleteUserData = await UserRepo.delete({
        email: data.email,
      });
      expect(deleteUserData).toBeInstanceOf(Object);
    });
  });
});
