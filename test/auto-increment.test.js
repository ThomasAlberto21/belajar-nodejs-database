import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  it("Should be able to create with auto increment", async () => {
    const category = await prismaClient.category.create({
      data: {
        name: "Food",
      },
    });

    console.info(category);
    expect(category).toHaveProperty("id");
  });
});
