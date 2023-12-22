import app from "@/app";
import SuperTest from "supertest";
import db from "@/database/db";
const req = SuperTest(app);
beforeEach(async () => {
  await db.initialize();
});
afterEach(async () => {
  await db.destroy();
});

describe("Test api", () => {
  describe("[test 1] /user endpoint", () => {
    describe("[USER]", () => {
      it("[User] GET", async () => {
        const [start, end] = [
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
        ];
        const res = await req.get(`/api/v1/users/?start=${start}&end=${end}`);

        expect(res.body.data.length).toBeGreaterThanOrEqual(0);
        if (res.body.data.length > 0)
          expect(res.body.data[0].password).toBe(undefined);
      });
    });
  });
});
