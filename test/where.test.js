import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  it("should can using or operator", async () => {
    const products = await prismaClient.product.findMany({
      where: {
        OR: [
          {
            name: "Buku",
          },
          {
            name: "Pensil",
          },
        ],
      },
      orderBy: {
        name: "asc",
      },
    });

    console.info(products);
    expect(products.length).toBe(2);
  });
});
