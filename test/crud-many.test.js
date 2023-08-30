import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client Test CRUD Many", () => {
  // TODO : Create many
  it("Should can create many records", async () => {
    const { count } = await prismaClient.customer.createMany({
      data: [
        {
          id: "asep",
          name: "Asep",
          email: "asep@gmail.com",
          phone: "08123223456789",
        },
        {
          id: "joko",
          name: "Joko",
          email: "joko@gmail.com",
          phone: "081234567893232",
        },
      ],
    });

    expect(count).toBe(2);
  });

  // TODO : Read Many
  it("should can read many records", async () => {
    const customers = await prismaClient.customer.findMany({});
    console.info(customers);
    expect(customers.length).toBe(6);
  });

  // TODO : Update Many
  it("Should can update many records", async () => {
    const { count } = await prismaClient.customer.updateMany({
      data: {
        email: "aseplagi@gmail.com",
      },
      where: {
        name: "Asep",
      },
    });

    expect(count).toBe(1);
  });

  // TODO : Delete Many
  it("should can delete many records", async () => {
    const { count } = await prismaClient.customer.deleteMany({
      where: {
        name: "Alberto",
      },
    });
    expect(count).toBe(2);
  });
});
