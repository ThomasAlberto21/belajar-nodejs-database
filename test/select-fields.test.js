import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  it("should be able create and select", async () => {
    const customers = await prismaClient.customer.create({
      data: {
        id: "john",
        name: "John Doe",
        email: "johndoegmail.com",
        phone: "1234567890",
      },
      select: {
        id: true,
        name: true,
      },
    });

    expect(customers.id).toBe("john");
    expect(customers.name).toBe("John Doe");
    expect(customers.email).toBeUndefined();
    expect(customers.phone).toBeUndefined();
  });

  it("should be able find many with select", async () => {
    const customers = await prismaClient.customer.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    for (const customer of customers) {
      expect(customer.id).toBeDefined();
      expect(customer.name).toBeDefined();
      expect(customer.email).toBeUndefined();
      expect(customer.phone).toBeUndefined();
    }
  });
});
