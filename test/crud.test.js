import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client CRUD", () => {
  // TODO : Create
  it("Should be able to create customer", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "1",
        name: "Thomas Alberto",
        email: "thomas@gmail.com",
        phone: "083323823233",
      },
    });
    expect(customer.id).toBe("1");
    expect(customer.name).toBe("Thomas Alberto");
    expect(customer.email).toBe("thomas@gmail.com");
    expect(customer.phone).toBe("083323823233");
  });

  // TODO : Update
  it("Should be able to update customer", async () => {
    const customer = await prismaClient.customer.update({
      data: {
        email: "thomas123@gmail.com",
      },
      where: {
        id: "1",
      },
    });
    expect(customer.id).toBe("1");
    expect(customer.name).toBe("Thomas Alberto");
    expect(customer.email).toBe("thomas123@gmail.com");
    expect(customer.phone).toBe("083323823233");
  });

  // TODO : Read
  it("Should be able to read customer", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "1",
      },
    });
    expect(customer.id).toBe("1");
    expect(customer.name).toBe("Thomas Alberto");
    expect(customer.email).toBe("thomas123@gmail.com");
    expect(customer.phone).toBe("083323823233");
  });

  // TODO : Delete
  it("Should be able to delete customer", async () => {
    const customer = await prismaClient.customer.delete({
      where: {
        id: "1",
      },
    });
    expect(customer.id).toBe("1");
    expect(customer.name).toBe("Thomas Alberto");
    expect(customer.email).toBe("thomas123@gmail.com");
    expect(customer.phone).toBe("083323823233");
  });
});
