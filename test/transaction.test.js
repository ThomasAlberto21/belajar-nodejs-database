import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client Test", () => {
  it("Should can execute sequential transaction", async () => {
    const [thomas, alberto] = await prismaClient.$transaction([
      prismaClient.customer.create({
        data: {
          id: "thomas",
          name: "Thomas",
          email: "thomas@gmail.com",
          phone: "08123456789",
        },
      }),

      prismaClient.customer.create({
        data: {
          id: "alberto",
          name: "Alberto",
          email: "alberto@gmail.com",
          phone: "0823294020",
        },
      }),
    ]);

    expect(thomas.name).toBe("Thomas");
    expect(alberto.name).toBe("Alberto");
  });

  it("Should can execute interactive transaction", async () => {
    const [thomas, alberto] = await prismaClient.$transaction(
      async (prisma) => {
        const thomas = await prisma.customer.create({
          data: {
            id: "thomas2",
            name: "Thomas",
            email: "thomas2@gmail.com",
            phone: "081234567893322",
          },
        });

        const alberto = await prisma.customer.create({
          data: {
            id: "alberto2",
            name: "Alberto",
            email: "alberto2@gmail.com",
            phone: "082329402032322",
          },
        });

        return [thomas, alberto];
      },
    );

    expect(thomas.name).toBe("Thomas");
    expect(alberto.name).toBe("Alberto");
  });
});
