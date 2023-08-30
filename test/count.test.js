import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  it("should be able to count records", async () => {
    const count = await prismaClient.customer.count({
      where: {
        name: "Thomas",
      },
    });

    expect(count).toBe(2);
  });
});
